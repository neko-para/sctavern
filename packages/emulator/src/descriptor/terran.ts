import { UnitKey } from '@sctavern/data'
import { CardInstance } from '../card'
import { InnerMsg } from '../events'
import { Descriptor } from '../types'
import { rep } from '../utils'

export function 任务<T extends InnerMsg['msg']>(
  msg: T,
  count: number,
  reward: (card: CardInstance) => void,
  predict: (msg: Extract<InnerMsg, { msg: T }>) => boolean = () => true,
  policy: 'never' | 'roundend' | 'instant' = 'never'
): Descriptor {
  return {
    config: {
      init: {
        task: [0, 0],
      },
    },
    listener: {
      [msg]: function (this: CardInstance, msg: Extract<InnerMsg, { msg: T }>) {
        if (this.attrib.get('task') < count && predict(msg)) {
          this.attrib.alter('task', 1)
          if (this.attrib.get('task') === count) {
            reward(this)
            this.$ref$Player.post({
              msg: 'task-done',
              target: this.index(),
            })
            if (policy === 'instant') {
              this.attrib.set('task', 0)
            }
          }
        }
      },
      'round-end': function (this: CardInstance) {
        if (policy === 'roundend') {
          this.attrib.set('task', 0)
        }
      },
    },
    note: card => {
      return [`任务进度: ${card.attrib.get('task')} / ${count}`]
    },
  }
}

export function 快速生产(
  unit: UnitKey,
  normal: number,
  gold: number
): Descriptor {
  return {
    listener: {
      'fast-produce': function () {
        this.obtain_unit(rep(unit, this.isg() ? gold : normal))
      },
    },
  }
}

export function 反应堆(unit: UnitKey): Descriptor {
  return {
    listener: {
      'round-end': function () {
        if (this.infr() === '反应堆') {
          this.obtain_unit(rep(unit, this.isy() ? 2 : 1))
        }
      },
    },
  }
}

export default function (/* config */): Record<string, Descriptor> {
  return {
    死神火车0: 任务('card-entered', 2, card =>
      card.$ref$Player.obtain_resource({
        mineral: card.isg() ? 2 : 1,
      })
    ),
    好兄弟0: 快速生产('陆战队员', 4, 6),
    好兄弟1: 反应堆('陆战队员'),
    // 挖宝奇兵0: 任务('store-refreshed', 5)
  }
}
