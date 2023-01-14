import { elited, isNormal, UnitData, UnitKey } from '@sctavern/data'
import { CardInstance } from '../card'
import { InnerMsg } from '../events'
import { Descriptor } from '../types'
import { rep } from '../utils'

function 孵化X<T extends InnerMsg['msg']>(
  msg: T,
  unit: (ci: CardInstance) => UnitKey[],
  pred: (
    ci: CardInstance,
    msg: Extract<InnerMsg, { msg: T }>
  ) => boolean = () => true,
  post: (ci: CardInstance) => void = () => void 0,
  id = 0
): Descriptor {
  return {
    listener: {
      [msg](this: CardInstance, m: Extract<InnerMsg, { msg: T }>) {
        if (pred(this, m)) {
          this.incubate(id)
        }
      },
      'req-incubate'({ id: i }) {
        if (i === -1 || i === id) {
          this.$ref$Player.incubate(this, unit(this))
          post(this)
        }
      },
    },
  }
}

function 孵化(
  msg: InnerMsg['msg'],
  unit: UnitKey,
  normal: number,
  gold: number,
  id = 0
) {
  return 孵化X(
    msg,
    ci => rep(unit, ci.isg() ? gold : normal),
    () => true,
    () => void 0,
    id
  )
}

function 注卵(
  msg: InnerMsg['msg'],
  unit: (ci: CardInstance) => UnitKey[],
  pred: (ci: CardInstance) => boolean = () => true
): Descriptor {
  return {
    listener: {
      [msg](this: CardInstance) {
        if (pred(this)) {
          this.$ref$Player.inject(unit(this))
        }
      },
    },
  }
}

export default function (/* config */): Record<string, Descriptor> {
  return {
    虫卵0: 孵化X(
      'round-start',
      ci =>
        ci.units
          .map(u => UnitData[u])
          .filter(u => isNormal(u) && u.tag.biological)
          .map(u => u.name),
      ci => {
        return (
          ci.around().filter(c => c.race === 'Z').length === 2 ||
          ci.$ref$Player.config.AlwaysIncubate
        )
      },
      ci => {
        ci.$ref$Player.destroy(ci)
      }
    ),
    '虫卵<跳虫>0': {
      listener: {
        'post-sell'() {
          const eggs = this.$ref$Player.all().filter(c => c.name === '虫卵')
          if (eggs.length > 1) {
            // 最后一个是出售的卡
            eggs[0].obtain_unit(this.units)
          }
        },
      },
    },
    虫群先锋0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('跳虫', this.isg() ? 4 : 2))
        },
      },
    },
    蟑螂小队0: {
      listener: {
        'round-start'() {
          this.replace(this.find('蟑螂', this.isg() ? 2 : 1), '破坏者')
        },
      },
    },
    蟑螂小队1: 注卵('post-sell', ci => rep('蟑螂', ci.isg() ? 4 : 2)),
    屠猎者0: {
      listener: {
        'round-end'() {
          this.replace(this.find('刺蛇'), elited)
        },
      },
    },
    屠猎者1: {
      listener: {
        'tavern-upgraded'() {
          this.obtain_unit(rep('刺蛇(精英)', this.isg() ? 2 : 1))
        },
      },
    },
    埋地刺蛇0: 注卵('post-sell', ci => rep('刺蛇', ci.isg() ? 6 : 3)),
    变异军团0: {
      listener: {
        inject() {
          this.obtain_unit(rep('被感染的陆战队员', this.isg() ? 2 : 1))
        },
      },
    },
    孵化蟑螂0: 孵化('round-end', '蟑螂', 1, 2),
    爆虫滚滚0: 孵化X('round-end', ci =>
      rep(
        '爆虫',
        Math.floor(
          ci.find(u => ['爆虫', '爆虫(精英)'].includes(u)).length /
            (ci.isg() ? 15 : 20)
        )
      )
    ),
    爆虫滚滚1: {
      config: {
        unique: 'normal',
      },
      listener: {
        'card-selled'({ target }) {
          this.obtain_unit([
            ...rep('爆虫', target.find('跳虫').length),
            ...rep('爆虫(精英)', target.find('跳虫(精英)').length),
          ])
        },
      },
    },
    飞龙骑脸0: 孵化('post-sell', '异龙', 2, 4),
    凶残巨兽0: 注卵('post-sell', ci => rep('雷兽', ci.isg() ? 2 : 1)),
    注卵虫后0: 注卵('round-start', ci => [
      ...rep('蟑螂', ci.isg() ? 2 : 1),
      ...rep('刺蛇', ci.isg() ? 2 : 1),
    ]),
    孵化所0: {
      config: {
        unique: 'normal',
      },
      listener: {
        'obtain-unit'({ time, units, way }) {
          if (time !== 'post' || way !== 'incubate') {
            return
          }
          this.obtain_unit(rep(units[units.length - 1], this.isg() ? 3 : 2))
        },
      },
    },
    地底伏击0: 孵化('post-enter', '潜伏者', 1, 2),
    孵化刺蛇0: 孵化('round-end', '刺蛇(精英)', 1, 2),
    感染深渊0: {
      listener: {
        'round-end'() {
          this.$ref$Player.inject(
            rep(
              '被感染的陆战队员',
              this.$ref$Player
                .all()
                .map(c => {
                  const idx = c.find('陆战队员', this.isg() ? 4 : 2)
                  c.filter((u, i) => idx.includes(i))
                  return idx.length
                })
                .reduce((a, b) => a + b, 0)
            )
          )
        },
      },
    },
    感染深渊1: {
      listener: {
        'round-start'() {
          this.$ref$Player.all().forEach(ci => {
            ci.replace(ci.find('陆战队员', this.isg() ? 2 : 1), '畸变体')
          })
        },
      },
    },
    腐化大龙0: {
      listener: {
        'round-start'() {
          this.replace(this.find('腐化者', this.isg() ? 4 : 2), '巢虫领主')
        },
      },
    },
    腐化大龙1: 注卵('post-sell', ci => rep('巢虫领主', ci.isg() ? 4 : 2)),
    空中管制0: 孵化('post-enter', '爆蚊', 3, 6, 0),
    空中管制1: 孵化('post-enter', '异龙(精英)', 1, 2, 1),
    虫群大军0: {
      listener: {
        'round-end'() {
          if (this.$ref$Player.all_of('Z').length >= 4) {
            this.$ref$Player.inject(rep('雷兽', this.isg() ? 2 : 1))
          }
        },
      },
    },
    终极进化0: {
      listener: {
        'post-enter'() {
          this.around().forEach(ci => {
            ci.replace(
              ci.find(
                u => ['蟑螂', '蟑螂(精英)'].includes(u),
                this.isg() ? 2 : 1
              ),
              '莽兽'
            )
          })
        },
      },
    },
    凶猛巨兽0: {
      listener: {
        'post-enter'() {
          this.$ref$Player.all_of('Z').forEach(ci => {
            ci.obtain_unit(rep('腐化者', this.isg() ? 4 : 2))
          })
        },
      },
    },
    凶猛巨兽1: {
      listener: {
        'round-end'() {
          this.around()
            .filter(c => c.race === 'Z')
            .forEach(ci => {
              ci.obtain_unit(rep('守卫', this.isg() ? 4 : 2))
            })
        },
      },
    },
    扎加拉0: {
      config: {
        unique: 'normal',
      },
      listener: {
        incubate({ units }) {
          this.obtain_unit(units, 'incubate')
          if (this.isg()) {
            this.obtain_unit(['巢虫领主'])
          }
        },
      },
    },
    斯托科夫0: {
      config: {
        unique: 'normal',
      },
      note: (ci, act) => [
        act
          ? ci.isg() || ci.$ref$Player.persisAttrib.get('斯托科夫')
            ? '注卵'
            : '禁用'
          : '停用',
      ],
      listener: {
        'card-entered'({ target }) {
          if (target.race === 'Z' || target.level >= 6) {
            return
          }
          const v = this.$ref$Player.persisAttrib.get('斯托科夫')
          this.$ref$Player.persisAttrib.set('斯托科夫', this.isg() ? 0 : 1 - v)
          if (this.isg() || v === 1) {
            this.$ref$Player.inject(
              target.units
                .map(u => UnitData[u])
                .filter(u => isNormal(u) && !u.tag.heroic)
                .map(u => u.name),
              'left'
            )
          }
        },
      },
    },
  }
}
