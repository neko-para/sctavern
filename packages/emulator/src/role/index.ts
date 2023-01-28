import { CardData, RoleKey } from '@sctavern/data'
import { RoleImpl } from '../types'

export function CreateRoleTable() {
  const res: {
    [r in RoleKey]?: Partial<RoleImpl>
  } = {
    白板: {},
    执政官: {
      init() {
        this.enable = true
      },

      listener: {
        'round-enter'() {
          this.enable = true
        },
      },

      ability(player) {
        if (!this.enable) {
          return
        }
        const left = player.query_selected_present()
        const right = left?.right()
        if (
          !left ||
          !right ||
          left.race === right.race ||
          left.color !== 'normal' ||
          right.color !== 'normal'
        ) {
          return
        }
        const leftDesc = left.descs
        right.name = `${right.name}x${left.name}`
        right.color = 'amber'
        right.belong = 'none'
        right.race =
          right.race === 'N' ? left.race : left.race !== 'N' ? 'N' : right.race
        right.occupy.push(...left.occupy)
        right.seize(left, {
          fake: true,
          withUpgrade: true,
        })
        right.descs.push(...leftDesc)
        switch (this.attrib.mode || 0) {
          case 0:
            this.enable = false
            break
          case 1:
            right.units = [...right.units, ...right.units]
            this.enable = false
            break
          case 2:
            player.obtain_resource({
              mineral: 3,
            })
            break
        }
      },
    },
    狂热者: {},
    陆战队员: {
      init() {
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        if (player.mineral < 2) {
          return
        }
        player.obtain_resource({
          mineral: -2,
        })
        if (this.attrib.mode === 2) {
          player.$ref$Game.pool
            .discover(c => c.level === Math.max(1, player.level - 1), 2)
            ?.forEach(c => player.stage(c.name))
        } else {
          player.push_discover(
            player.$ref$Game.pool
              .discover(c => c.level === Math.max(1, player.level - 1), 3)
              ?.map(card => ({
                type: 'card',
                card,
              }))
          )
        }
        if (this.attrib.mode !== 1) {
          this.enable = false
        }
      },
    },
    收割者: {
      init(player) {
        player.config.AlwaysInsert = true
      },
      listener: {
        'get-buy-cost'(m) {
          const card = CardData[m.cardt]
          if (card.attr.insert) {
            m.cost = Math.min(this.attrib.mode === 1 ? 1 : 2, m.cost)
          }
        },
      },
    },
    幽灵: {
      init() {
        this.progress.cur = 1
        this.progress.max = 2
      },
      ability(player) {
        if (this.attrib.mode !== 1) {
          this.progress.cur = 3 - this.progress.cur
        } else {
          if (player.mineral < 2) {
            return
          }
          // TODO
        }
      },
    },
    感染虫: {
      init() {
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        if (this.attrib.mode !== 1 && ci.race !== 'T') {
          return
        }
        ci.filter(u => u === '反应堆')
        ci.name = `被感染的${ci.name}`
        ci.color = 'amber'
        ci.race = 'Z'
        ci.descs = [this.attrib.mode === 2 ? '被感染的3' : '被感染的']
        this.enable = false
      },
    },
    SCV: {
      init() {
        this.enable = true
      },
      listener: {
        'round-start'() {
          if (this.attrib.mode === 1) {
            this.progress.cur = 3
          }
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (
          !ci ||
          ci.race !== 'T' ||
          [false, '高级科技实验室'].includes(ci.infr())
        ) {
          return
        }
        ci.switch_infr()
        if (this.attrib.mode === 1) {
          this.progress.cur -= 1
          this.enable = this.progress.cur > 0
        } else {
          this.enable = false
          if (this.attrib.mode === 2) {
            if (player.mineral >= 1) {
              player.obtain_resource({
                mineral: -1,
              })
              this.enable = true
            }
          }
        }
      },
    },
    阿巴瑟: {
      init() {
        this.enable = true
      },
      listener: {
        'round-start'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        if (this.attrib.mode !== 2) {
          if (player.mineral < 3) {
            return
          } else {
            player.obtain_resource({
              mineral: -3,
            })
          }
        }
        if (ci.occupy.length > 0 && this.attrib.mode === 1) {
          player.stage(ci.occupy[0])
        }
        const lv = Math.min(6, ci.level + 1)
        player.destroy(ci)
        player.push_discover(
          player.$ref$Game.pool
            .discover(c => c.level === lv, 3)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
        this.enable = false
      },
    },
    工蜂: {
      listener: {
        'round-enter'({ round }, player) {
          if (round % 2 === 1) {
            player.obtain_resource({
              gas: 1,
            })
          } else {
            player.obtain_resource({
              mineral: 1,
            })
          }
        },
        'tavern-upgraded'({ level }, player) {
          if (this.attrib.mode === 1) {
            player.obtain_resource({
              mineral: level,
              gas: level,
            })
          }
        },
      },
      ability(player) {
        if (this.attrib.mode === 2 && player.gas >= 1) {
          player.obtain_resource({
            mineral: 4,
            gas: -1,
          })
        }
      },
    },
    王虫: {
      init() {
        this.progress.cur = 0
        this.progress.max = 1
      },
      listener: {
        'round-start'() {
          if (this.attrib.mode !== 1) {
            this.progress.cur = 0
          }
        },
        'card-selled'({ target }, player) {
          if (this.attrib.mode !== 1) {
            this.progress.cur += 1
          }
          if (
            this.progress.cur === 1 &&
            this.attrib.mode === 2 &&
            target.occupy.length > 0
          ) {
            player.stage(target.occupy[0])
          }
        },
      },
    },
    蟑螂: {},
    副官: {
      init() {
        this.progress.cur = 1
        this.progress.max = 1
      },
      listener: {
        'round-enter'(m, player) {
          this.progress.cur = 1
          if (this.attrib.mode === 1) {
            player.obtain_resource({
              mineral: player.attrib.get('副官'),
            })
          } else {
            player.obtain_resource({
              mineral: player.attrib.get('副官') ? 1 : 0,
            })
          }
        },
        'round-leave'(m, player) {
          player.nextAttrib.set('副官', player.mineral)
        },
        'get-refresh-cost'(m, player) {
          if (m.cost > 0 && this.progress.cur > 0) {
            m.cost = 0
            if (m.time === 'real') {
              this.progress.cur -= 1
              if (this.attrib.mode === 2) {
                player.obtain_resource({
                  mineral: 1,
                })
              }
            }
          }
        },
      },
    },
  }
  for (const r in res) {
    const impl = res[r as keyof typeof res] as Partial<RoleImpl>
    impl.init = impl.init || (() => void 0)
    impl.listener = impl.listener || {}
    impl.ability = impl.ability || (() => void 0)
  }
  return res as Record<RoleKey, RoleImpl>
}

const t = CreateRoleTable()

export default t
