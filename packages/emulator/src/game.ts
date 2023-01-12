import { InnerMsg } from './events'
import { PlayerInstance } from './player'
import { Pool } from './pool'
import { ClientViewData, GameConfig } from './types'
import { rep, dup } from './utils'
import DescriptorTable from './descriptor'
import { Attribute } from './attrib'
import { PushState } from './wrapper'

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
      const j = this.int(0, i)
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
}

export class GameInstance {
  config: GameConfig
  attrib: Attribute

  lcg: LCG

  round: number
  pool: Pool

  player: (PlayerInstance | null)[]

  constructor(cfg: GameConfig) {
    this.config = dup(cfg)
    this.attrib = new Attribute()
    this.lcg = new LCG(this.config.Seed || 1) // prevent 0
    this.round = 0
    this.pool = new Pool(this.config.Pack, this.lcg)
    this.player = rep(null, this.config.Role.length).map((v, i) => {
      return new PlayerInstance(this, this.config.Role[i])
    })
  }

  post(msg: InnerMsg) {
    if ('player' in msg) {
      this.player[msg.player]?.answer(msg)
    } else {
      this.player.forEach(p => {
        if (p) {
          p.answer(msg)
        }
      })
    }
    this.emit()
  }

  getState(): ClientViewData {
    const state: ClientViewData = {
      config: dup(this.config),

      round: this.round,

      player: this.player.map(p => {
        return p
          ? {
              config: dup(p.config),
              life: p.life,
              level: p.level,
              upgrade_cost: p.upgrade_cost,
              status: p.status,

              mineral: p.mineral,
              mineral_max: p.mineral_max,
              gas: p.gas,
              gas_max: p.gas_max,

              selected: dup(p.selected),
              locked: p.locked,

              role: {
                name: p.role.name,
                ability: p.role.ability,
                desc: p.role.desc,
                enable: p.role.enable,

                progress: dup(p.role.progress),
                enhance: p.role.enhance,
              },

              store: p.store.map(s => {
                return s
                  ? {
                      card: s.card,
                      special: s.special,
                      actions: [],
                    }
                  : null
              }),
              hand: p.hand.map(h => {
                return h
                  ? {
                      card: h.card,
                      actions: [],
                    }
                  : null
              }),
              present: p.present.map(p => {
                return p
                  ? {
                      card: {
                        config: dup(p.card.config),
                        name: p.card.name,
                        race: p.card.race,
                        level: p.card.level,
                        color: p.card.color,
                        belong: p.card.belong,
                        units: dup(p.card.units),
                        upgrades: dup(p.card.upgrades),
                        descs: p.card.descs.map(
                          key =>
                            DescriptorTable[key].text?.[p.card.isg() ? 1 : 0] ||
                            `未知描述 ${key}`
                        ),
                        notes: p.card.descs
                          .map(key => DescriptorTable[key].note?.(p.card) || [])
                          .flat(),
                      },
                      actions: [],
                    }
                  : null
              }),
            }
          : null
      }),
    }
    return state
  }

  emit() {
    PushState(this, this.getState())
  }

  start() {
    this.round = 1
    this.post({
      msg: 'round-start',
      round: 1,
    })
    this.post({
      msg: 'round-enter',
      round: 1,
    })
  }
}
