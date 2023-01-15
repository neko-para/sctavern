import { UnitData } from '@sctavern/data'
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
    },
  }
}
