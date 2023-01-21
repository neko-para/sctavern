import { InnerMsg } from './events'
import { PlayerInstance } from './player'
import { Pool } from './pool'
import { GameState, GameConfig, PresentAction } from './types'
import { dup, repX } from './utils'
import DescriptorTable from './descriptor'
import { Attribute } from './attrib'
import { RoleData } from '@sctavern/data'
import { Server } from './server'

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

  one_of<T>(array: T[]): T | null {
    return array.length > 0 ? array[this.int(array.length - 1)] : null
  }
}

export class GameInstance {
  $ignore$Server: Server

  config: GameConfig
  attrib: Attribute

  lcg: LCG

  round: number
  pool: Pool

  player: (PlayerInstance | null)[]

  constructor(cfg: GameConfig, srv: Server) {
    this.$ignore$Server = srv

    this.config = dup(cfg)
    this.attrib = new Attribute()
    this.lcg = new LCG(this.config.Seed || 1) // prevent 0
    this.round = 0
    this.pool = new Pool(this.config.Pack, this.lcg, this.config.PoolPack)
    this.player = repX(null, this.config.Role.length).map((v, i) => {
      return new PlayerInstance(this, this.config.Role[i])
    })
  }

  input(msg: InnerMsg) {
    if (msg.msg === '$select') {
      const pl = this.player[msg.player]
      if (msg.area === pl?.selected.area && msg.place === pl.selected.place) {
        return
      }
    }
    console.log(msg)
    this.post(msg)
    this.emit()
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
  }

  getState(): GameState {
    const state: GameState = {
      config: dup(this.config),

      round: this.round,

      player: this.player.map((p, ip) => {
        return p
          ? {
              config: dup(p.config),
              life: p.life,
              level: p.level,
              upgrade_cost: p.upgrade_cost,
              status: p.curStatus(),

              discover: p.discoverItem[0] || null,

              mineral: p.mineral,
              mineral_max: p.mineral_max,
              gas: p.gas,
              gas_max: p.gas_max,

              selected: dup(p.selected),
              locked: p.locked,

              role: {
                name: p.role.name,
                ability: RoleData[p.role.name].ability,
                desc: RoleData[p.role.name].desc,
                enable: p.role.enable,

                progress:
                  p.role.progress.cur === -1 ? null : dup(p.role.progress),
                enhance: p.role.enhance,
              },

              action: [
                {
                  action: 'upgrade',
                  enable: p.can_tavern_upgrade() && p.curStatus() === 'normal',
                  msg: {
                    msg: '$upgrade',
                    player: ip,
                  },
                },
                {
                  action: 'refresh',
                  enable: p.can_refresh() && p.curStatus() === 'normal',
                  msg: {
                    msg: '$refresh',
                    player: ip,
                  },
                },
                {
                  action: p.locked ? 'unlock' : 'lock',
                  enable: p.curStatus() === 'normal',
                  msg: {
                    msg: p.locked ? '$unlock' : '$lock',
                    player: ip,
                  },
                },
                {
                  action: 'finish',
                  enable: p.curStatus() === 'normal',
                  msg: {
                    msg: '$finish',
                    player: ip,
                  },
                },
                {
                  action: 'ability',
                  enable: p.role.enable && p.curStatus() === 'normal',
                  msg: {
                    msg: '$ability',
                    player: ip,
                  },
                },
              ],
              store: p.store.map((s, i) => {
                if (!s) {
                  return null
                }
                const action = p.can_combine(s.card) ? 'combine' : 'enter'
                return {
                  card: s.card,
                  special: s.special,
                  actions: [
                    {
                      action,
                      enable:
                        p.can_buy(s.card, action, i) &&
                        p.curStatus() === 'normal',
                      msg: {
                        msg: '$action',
                        player: ip,
                        action,
                        area: 'store',
                        place: i,
                      },
                      acckey: 'e',
                    },
                    {
                      action: 'stage',
                      enable:
                        p.can_buy(s.card, 'stage', i) &&
                        p.can_stage() &&
                        p.curStatus() === 'normal',
                      msg: {
                        msg: '$action',
                        player: ip,
                        action: 'stage',
                        area: 'store',
                        place: i,
                      },
                      acckey: 'v',
                    },
                  ],
                }
              }),
              hand: p.hand.map((h, i) => {
                if (!h) {
                  return null
                }
                const action = p.can_combine(h.card) ? 'combine' : 'enter'
                return h
                  ? {
                      card: h.card,
                      actions: [
                        {
                          action,
                          enable:
                            (action === 'enter' ? p.can_enter(h.card) : true) &&
                            p.curStatus() === 'normal',
                          msg: {
                            msg: '$action',
                            player: ip,
                            action,
                            area: 'hand',
                            place: i,
                          },
                          acckey: 'e',
                        },
                        {
                          action: 'sell',
                          enable: p.curStatus() === 'normal',
                          msg: {
                            msg: '$action',
                            player: ip,
                            action: 'sell',
                            area: 'hand',
                            place: i,
                          },
                          acckey: 's',
                        },
                      ],
                    }
                  : null
              }),
              present: p.present.map((pr, i) => {
                const acts: PresentAction[] = []
                if (p.curStatus() === 'insert') {
                  acts.push({
                    action: 'insert',
                    enable: true,
                    msg: {
                      msg: '$choice',
                      player: ip,
                      category: 'insert',
                      place: i,
                    },
                    acckey: 'x',
                  })
                } else if (p.curStatus() === 'deploy') {
                  acts.push({
                    action: 'deploy',
                    enable: true,
                    msg: {
                      msg: '$choice',
                      player: ip,
                      category: 'deploy',
                      place: i,
                    },
                    acckey: 'x',
                  })
                } else if (p.curStatus() === 'normal') {
                  if (pr) {
                    acts.push({
                      action: 'upgrade',
                      enable: p.can_pres_upgrade(pr.card),
                      msg: {
                        msg: '$action',
                        player: ip,
                        action: 'upgrade',
                        area: 'present',
                        place: i,
                      },
                      acckey: 'g',
                    })
                    acts.push({
                      action: 'sell',
                      enable: true,
                      msg: {
                        msg: '$action',
                        player: ip,
                        action: 'sell',
                        area: 'present',
                        place: i,
                      },
                      acckey: 's',
                    })
                  }
                }
                return {
                  card: pr
                    ? {
                        config: dup(pr.card.config),
                        name: pr.card.name,
                        race: pr.card.race,
                        level: pr.card.level,
                        color: pr.card.color,
                        belong: pr.card.belong,
                        units: dup(pr.card.units),
                        upgrades: dup(pr.card.upgrades),
                        descs: pr.card.descs.map(
                          key =>
                            DescriptorTable[key].text?.[
                              pr.card.isg() ? 1 : 0
                            ] || `未知描述 ${key}`
                        ),
                        notes: pr.card.descs
                          .map(
                            key =>
                              DescriptorTable[key].note?.(
                                pr.card,
                                p.check_unique_active(key, i)
                              ) || []
                          )
                          .flat()
                          .concat(pr.card.extraNote()),
                        value: pr.card.value(),
                      }
                    : null,
                  actions: acts,
                }
              }),
            }
          : null
      }),
    }
    return state
  }

  emit() {
    this.$ignore$Server.emit(this.getState())
  }

  start() {
    this.round = 0
    this.roundStart()
    this.emit()
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
    this.roundStart()
  }

  roundStart() {
    this.round += 1
    this.post({
      msg: 'round-start',
      round: this.round,
    })
    this.post({
      msg: 'round-enter',
      round: this.round,
    })
  }
}
