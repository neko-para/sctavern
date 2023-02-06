import { isNormal, UnitData } from '@sctavern/data'
import type { Race } from '@sctavern/data'
import type { Descriptor } from '../types'
import { rep } from '../utils'

export default function (/* config */): Record<string, Descriptor> {
  return {
    黄金矿工0: {
      listener: {
        'round-start'() {
          this.$ref$Player.obtain_resource({
            mineral: 1,
          })
        },
      },
    },
    黄金矿工1: {
      listener: {
        'post-sell'() {
          this.$ref$Player.obtain_resource({
            mineral: 2,
          })
        },
      },
    },
    原始尖塔: {
      listener: {
        'card-selled'({ target }) {
          if (target.race === 'N' && target !== this) {
            this.obtain_unit(['原始异龙'])
          }
        },
      },
      text: [
        '出售一张中立卡时, 获得1原始异龙',
        '出售一张中立卡时, 获得1原始异龙',
      ],
    },
    献祭: {
      listener: {
        'obtain-unit'(m) {
          if (m.time === 'prev') {
            this.attrib.alter(
              'sacrifice',
              m.units
                .map(u => UnitData[u].health + (UnitData[u].shield || 0))
                .reduce((a, b) => a + b, 0) * 1.5
            )
            this.attrib.alter(
              'sacrificeValue',
              m.units.map(u => UnitData[u].value).reduce((a, b) => a + b, 0)
            )
            m.units = []
          }
        },
      },
      text: ['新添加的单位同样会献祭', '新添加的单位同样会献祭'],
    },
    虫卵_跳虫: {
      listener: {
        'post-sell'() {
          const eggs = this.$ref$Player.all().filter(c => c.name === '虫卵')
          if (eggs.length > 1) {
            // 最后一个是出售的卡
            eggs[0].obtain_unit(this.units)
          }
        },
      },
      text: [
        '出售该卡牌时, 尝试将此卡牌的单位转移到另一张虫卵牌上',
        '出售该卡牌时, 尝试将此卡牌的单位转移到另一张虫卵牌上',
      ],
    },
    被感染的: {
      listener: {
        'round-end'() {
          const u = this.$ref$Player.$ref$Game.lcg.one_of(
            this.units.filter(u => isNormal(UnitData[u]))
          )
          if (u) {
            this.$ref$Player.spawn([u])
          }
        },
      },
      text: [
        '无法三连, 每回合结束时注卵随机一个单位',
        '无法三连, 每回合结束时注卵随机一个单位',
      ],
    },
    被感染的3: {
      listener: {
        'round-end'() {
          const u = this.$ref$Player.$ref$Game.lcg.one_of(
            this.units.filter(u => isNormal(UnitData[u]))
          )
          if (u) {
            this.$ref$Player.spawn(rep(u, 3))
          }
        },
      },
      text: [
        '无法三连, 每回合结束时注卵随机一个单位三次',
        '无法三连, 每回合结束时注卵随机一个单位三次',
      ],
    },
    幽灵报道0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('幽灵', 2))
        },
      },
    },
    幽灵报道1: {
      listener: {
        'card-entered'() {
          const rs: Race[] = ['T', 'P', 'Z', 'N']
          const c = this.$ref$Player.count()
          const m = Math.max(...rs.map(r => c[r]))
          if (c[this.race] !== m) {
            for (const ci of this.$ref$Player.all()) {
              if (c[ci.race] === m) {
                this.race = ci.race
                break
              }
            }
          }
        },
      },
    },
    生化实验室0: {
      listener: {
        'post-deploy'({ target }) {
          this.$ref$Player.spawn(
            rep(
              '被感染的陆战队员',
              target.filter(
                u => u !== '被感染的陆战队员' && !!UnitData[u].tag.biological
              ).length
            )
          )
        },
      },
    },
    紧急回收0: {
      listener: {
        'post-deploy'({ target }) {
          const units = target.findu(
            u => isNormal(UnitData[u]) && !UnitData[u].tag.heroic
          )
          const into = target
            .around()
            .filter(ci => ci.name !== '虫卵' && ci.name !== '被感染的虫卵') // ?
          this.$ref$Player.destroy(target)
          if (into.length > 0) {
            into[0].obtain_unit(units)
          }
        },
      },
    },
    星灵科技: {
      listener: {
        'round-end'() {
          this.$ref$Player.warp(rep('陆战队员', this.isg() ? 2 : 1))
        },
      },
      text: ['每回合结束时, 折跃1陆战队员', '每回合结束时, 折跃2陆战队员'],
    },
    星灵科技0: {
      listener: {
        'post-deploy'({ target }) {
          target.add_desc('星灵科技')
        },
      },
    },
    尖端科技0: {
      listener: {
        'post-deploy'({ target }) {
          target.obtain_upgrade('轨道空降')
        },
      },
    },
    超负荷0: {
      listener: {
        'post-deploy'({ target }) {
          this.$ref$Player.destroy(target, { extraEnter: true })
        },
      },
    },
  }
}
