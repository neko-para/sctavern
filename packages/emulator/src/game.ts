import type { InnerMsg } from './events'
import { PlayerInstance } from './player'
import { Pool } from './pool'
import type { GameState, GameConfig, GameStatus, CounterTarget } from './types'
import { chunk, dup, repX } from './utils'
import { Attribute } from './attrib'
import type { StateTransfer } from './stateTransfer'

export class LCG {
  seed: number

  constructor(begin: number) {
    this.seed = begin
  }

  next() {
    this.seed = (25214903917 * this.seed) & ((1 << 48) - 1)
    return this.seed
  }

  float() {
    // [0, 1)
    return this.next() / (1 << 48)
  }

  int(max: number, min = 0) {
    // [min, max]
    return min + Math.floor(this.float() * (max - min + 1))
  }

  shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.int(i)
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  one_of<T>(array: readonly T[]): T | null {
    return array.length > 0 ? array[this.int(array.length - 1)] : null
  }
}

function doShift(pos: number[]) {
  const arr = pos
    .slice(1)
    .map((value, index) => ({
      value,
      index,
      dir: index % 2 === 0,
    }))
    .sort((a, b) => {
      if (a.dir === b.dir) {
        return a.dir ? a.index - b.index : b.index - a.index
      } else {
        return a.dir ? -1 : 1
      }
    })
  const newarr = arr.map(x => x.value)
  newarr.push(newarr.shift() as number)
  arr.forEach((value, index) => {
    value.value = newarr[index]
  })
  arr.sort((a, b) => {
    return a.index - b.index
  })
  return [pos[0], ...arr.map(x => x.value)]
}

export class GameInstance {
  $ignore$StateTransfer: StateTransfer

  config: GameConfig
  attrib: Attribute

  lcg: LCG

  round: number
  pool: Pool

  status: GameStatus
  playerTargets: [number, number][]

  counterOrder: number[]

  player: PlayerInstance[]

  constructor(cfg: GameConfig, st: StateTransfer) {
    this.$ignore$StateTransfer = st

    this.config = dup(cfg)
    this.attrib = new Attribute()
    this.lcg = new LCG(this.config.Seed || 1) // prevent 0
    this.round = 0
    this.pool = new Pool(
      this.config.Pack,
      this.lcg,
      this.config.PoolPack,
      this.config.Pve
    )
    this.status = 'store' // 'select'
    this.playerTargets = []

    this.counterOrder = Array.from(
      { length: this.config.Role.length },
      (v, k) => k
    )

    this.player = repX(null, this.config.Role.length).map((v, i) => {
      return new PlayerInstance(this, this.config.Role[i])
    })
  }

  input(msg: InnerMsg) {
    if (msg.msg === '$select') {
      const pl = this.player[msg.player]
      if (msg.area === pl.selected.area && msg.place === pl.selected.place) {
        return
      }
    }
    this.post(msg)
    this.emit()
  }

  post(msg: InnerMsg) {
    if ('player' in msg) {
      this.player[msg.player].answer(msg)
    } else {
      this.player.forEach(p => {
        if (p) {
          p.answer(msg)
        }
      })
    }
  }

  getState(): GameState {
    const state: GameState = {
      config: dup(this.config),

      round: this.round,

      endProgress: {
        current: this.player.filter(p => p.fin).length,
        require: this.player.filter(p => p.curStatus() !== 'die').length,
      },

      status: this.status,

      player: this.player.map(p => {
        return p ? p.getState() : null
      }),
    }
    return state
  }

  emit() {
    this.$ignore$StateTransfer.emit(this.getState())
  }

  start() {
    this.round = 0
    this.attrib.set('BaseDamage', 6)
    this.attrib.set('ValueDamageDivider', 500)
    this.lcg.shuffle(this.counterOrder)
    this.roundStart()
  }

  checkFin() {
    if (
      this.player.filter(p => p.curStatus() !== 'die').length ===
      this.player.filter(p => p.fin).length
    ) {
      this.roundEnd()
    }
  }

  roundStart() {
    this.status = 'store'
    this.round += 1

    if (this.round > 1) {
      if (this.round <= 10) {
        this.attrib.alter('ValueDamageDivider', 60)
      }

      if (this.round > 10 || this.round % 2 === 1) {
        this.attrib.alter('BaseDamage', 2)
      }
    }

    if (!this.config.Pve) {
      if (this.counterOrder.length === 1) {
        this.playerTargets = [[0, -1]]
        this.player[0].next_target = {
          type: 'AI',
          index: 0,
        }
      } else {
        this.counterOrder = doShift(this.counterOrder)
        this.playerTargets = chunk(this.counterOrder, 2) as [number, number][]
        this.playerTargets.forEach(([a, b]) => {
          if (a >= 0) {
            this.player[a].next_target =
              b >= 0
                ? {
                    type: 'Player',
                    index: b,
                  }
                : {
                    type: 'AI',
                    index: this.lcg.one_of(
                      this.counterOrder.filter(x => x >= 0 && x !== a)
                    ) as number,
                  }
          }
          if (b >= 0) {
            this.player[b].next_target =
              a >= 0
                ? {
                    type: 'Player',
                    index: a,
                  }
                : {
                    type: 'AI',
                    index: this.lcg.one_of(
                      this.counterOrder.filter(x => x >= 0 && x !== b)
                    ) as number,
                  }
          }
        })
      }
    }

    this.post({
      msg: 'round-start',
      round: this.round,
    })
    this.post({
      msg: 'round-enter',
      round: this.round,
    })
  }

  roundEnd() {
    this.post({
      msg: 'round-end',
      round: this.round,
    })
    this.post({
      msg: 'round-leave',
      round: this.round,
    })

    this.player.forEach(p => {
      p.fin = false
    })
    this.doBattle()
  }

  doBattle() {
    this.status = 'battle'

    if (!this.config.Pve) {
      this.playerTargets.forEach(([a, b]) => {
        const aIsAI = a < 0
        const bIsAI = b < 0

        const restA = aIsAI ? 0 : this.player[a].value()
        const restB = bIsAI ? 0 : this.player[b].value()

        const result = ((): {
          state: 'AW' | 'BW' | 'DR'
          aLoss: number
          bLoss: number
        } => {
          if (restA > restB) {
            if (restA <= restB * 1.2) {
              return {
                state: 'DR',
                aLoss: Math.floor(this.attrib.get('BaseDamage') / 2),
                bLoss: Math.floor(this.attrib.get('BaseDamage') / 2),
              }
            } else {
              return {
                state: 'AW',
                aLoss: 0,
                bLoss:
                  this.attrib.get('BaseDamage') +
                  Math.floor(
                    (restA - restB) / this.attrib.get('ValueDamageDivider')
                  ),
              }
            }
          } else {
            if (restB <= restA * 1.2) {
              return {
                state: 'DR',
                aLoss: Math.floor(this.attrib.get('BaseDamage') / 2),
                bLoss: Math.floor(this.attrib.get('BaseDamage') / 2),
              }
            } else {
              return {
                state: 'BW',
                aLoss:
                  this.attrib.get('BaseDamage') +
                  Math.floor(
                    (restB - restA) / this.attrib.get('ValueDamageDivider')
                  ),
                bLoss: 0,
              }
            }
          }
        })()

        switch (result.state) {
          case 'AW':
            if (!aIsAI) {
              this.player[a].post({
                msg: 'battle-result',
                state: 'win',
                life: 0,
              })
            }
            if (!bIsAI) {
              this.player[b].post({
                msg: 'battle-result',
                state: 'loss',
                life: this.player[b].post({
                  msg: 'recalc-life-loss',
                  loss: result.bLoss,
                }).loss,
              })
            }
            break
          case 'BW':
            if (!aIsAI) {
              this.player[a].post({
                msg: 'battle-result',
                state: 'loss',
                life: this.player[a].post({
                  msg: 'recalc-life-loss',
                  loss: result.aLoss,
                }).loss,
              })
            }
            if (!bIsAI) {
              this.player[b].post({
                msg: 'battle-result',
                state: 'win',
                life: 0,
              })
            }
            break
          case 'DR':
            if (!aIsAI) {
              this.player[a].post({
                msg: 'battle-result',
                state: 'draw',
                life: this.player[a].post({
                  msg: 'recalc-life-loss',
                  loss: result.aLoss,
                }).loss,
              })
            }
            if (!bIsAI) {
              this.player[b].post({
                msg: 'battle-result',
                state: 'draw',
                life: this.player[b].post({
                  msg: 'recalc-life-loss',
                  loss: result.bLoss,
                }).loss,
              })
            }
            break
        }
      })
      const co = this.player
        .filter(p => p.curStatus() === 'middle')
        .map(p => p.index())
      if (co.length === 0) {
        // 1player, loss
        this.status = 'finish'
        return
      } else if (co.length === 1) {
        if (this.config.Role.length > 1) {
          // win!
          this.status = 'finish'
          return
        }
      }
      if (this.counterOrder.length - co.length >= 2) {
        if (co.length % 2 === 1) {
          co.push(-1)
        }
        this.lcg.shuffle(co)
        this.counterOrder = co
      }
    }

    this.roundStart()
  }
}
