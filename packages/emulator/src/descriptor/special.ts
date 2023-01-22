import { isNormal, rep, UnitData } from '@sctavern/data'
import { Descriptor } from '../types'

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
            this.$ref$Player.inject([u])
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
            this.$ref$Player.inject(rep(u, 3))
          }
        },
      },
      text: [
        '无法三连, 每回合结束时注卵随机一个单位三次',
        '无法三连, 每回合结束时注卵随机一个单位三次',
      ],
    },
  }
}
