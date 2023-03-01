import {
  CardData,
  PackData,
  elited,
  isNormal,
  isRoyalized,
  UnitData,
} from '@sctavern/data'
import type { UnitKey } from '@sctavern/data'
import type { CardInstance } from '../card'
import type { InnerMsg } from '../events'
import type { Descriptor } from '../types'
import { notNull, rep } from '../utils'

export function 任务<T extends InnerMsg['msg']>(
  msg: T,
  count: number,
  reward: (card: CardInstance, msg: Extract<InnerMsg, { msg: T }>) => void,
  predict: (
    card: CardInstance,
    msg: Extract<InnerMsg, { msg: T }>
  ) => boolean = () => true,
  policy: 'never' | 'roundend' | 'instant' = 'never',
  text: string | [string, string] | undefined = undefined
): Descriptor {
  return {
    config: {
      init: {
        task: [0, 0],
      },
    },
    listener: {
      [msg](this: CardInstance, msg: Extract<InnerMsg, { msg: T }>) {
        if (this.attrib.get('task') < count && predict(this, msg)) {
          this.attrib.alter('task', 1)
          if (this.attrib.get('task') === count) {
            if (policy === 'instant') {
              this.attrib.set('task', 0)
            }
            reward(this, msg)
            this.$ref$Player.post({
              msg: 'task-done',
              target: this,
            })
          }
        }
      },
      'round-end'(this: CardInstance) {
        if (policy === 'roundend') {
          this.attrib.set('task', 0)
        }
      },
    },
    note: card => {
      return [`任务进度: ${card.attrib.get('task')} / ${count}`]
    },
    text: typeof text === 'string' ? [text, text] : text,
  }
}

export function 科挂X(
  count: number,
  reward: (card: CardInstance) => void
): Descriptor {
  return {
    listener: {
      'round-end'() {
        if (
          count <=
          this.$ref$Player
            .all()
            .map(
              c =>
                c.units.filter(u =>
                  ['科技实验室', '高级科技实验室'].includes(u)
                ).length
            )
            .reduce((a, b) => a + b, 0)
        ) {
          reward(this)
        }
      },
    },
  }
}

export function 进场后切换两侧挂件(): Descriptor {
  return {
    listener: {
      'post-enter'() {
        this.around()
          .filter(ci => ci.race === 'T')
          .forEach(ci => ci.switch_infr())
      },
    },
  }
}

export default function (/* config */): Record<string, Descriptor> {
  return {
    反应堆: {
      listener: {
        'round-end'(m, [unit]) {
          if (this.infr() === '反应堆') {
            this.obtain_unit(
              rep(unit as UnitKey, this.gold || this.color === 'amber' ? 2 : 1)
            )
          }
        },
      },
      text: ([unit]) => [`反应堆生产${unit}`, `反应堆生产${unit}`],
    },
    快速生产: {
      listener: {
        'fast-produce'(m, [unit, norm, gold]) {
          this.obtain_unit(
            rep(unit as UnitKey, this.gold ? Number(gold) : Number(norm))
          )
        },
      },
      text: ([unit, norm, gold]) => [
        `快速生产: 获得${norm}${unit}`,
        `快速生产: 获得${gold}${unit}`,
      ],
    },
    科挂: {
      listener: {
        'round-end'(m, [count, unit, norm, gold]) {
          if (
            Number(count) <=
            this.$ref$Player
              .all()
              .map(
                c =>
                  c.units.filter(u =>
                    ['科技实验室', '高级科技实验室'].includes(u)
                  ).length
              )
              .reduce((a, b) => a + b, 0)
          ) {
            this.obtain_unit(
              rep(unit as UnitKey, this.gold ? Number(gold) : Number(norm))
            )
          }
        },
      },
      text: ([count, unit, norm, gold]) => [
        `每回合结束时, 若拥有至少${count}科技挂件, 则获得${norm}${unit}`,
        `每回合结束时, 若拥有至少${count}科技挂件, 则获得${gold}${unit}`,
      ],
    },

    死神火车0: 任务('card-entered', 2, card =>
      card.$ref$Player.obtain_resource({
        mineral: card.gold ? 2 : 1,
      })
    ),
    好兄弟0: { refer: '快速生产:陆战队员:4:6' },
    好兄弟1: { refer: '反应堆:陆战队员' },
    挖宝奇兵0: 任务('store-refreshed', 5, card => {
      card.$ref$Player.push_discover(
        card.$ref$Player.$ref$Game.pool
          .discover(c => c.level === card.$ref$Player.level, 3)
          ?.map(c => ({
            type: 'card',
            card: c,
          }))
      )
    }),
    实验室安保0: { refer: '反应堆:陆战队员' },
    实验室安保1: 进场后切换两侧挂件(),
    征兵令0: {
      listener: {
        'post-enter'() {
          this.around()
            .filter(ci => ci.race === 'T')
            .forEach(ci => {
              this.obtain_unit(
                ci.filter((u, i) => i % 3 !== 0 && isNormal(UnitData[u]))
              )
            })
        },
      },
    },
    恶火小队0: { refer: '反应堆:恶火' },
    恶火小队1: { refer: '科挂:2:歌利亚:1:2' },
    恶火小队2: { refer: '快速生产:攻城坦克:1:1' },
    空投地雷0: {
      listener: {
        'card-entered'() {
          this.obtain_unit(rep('寡妇雷', this.gold ? 2 : 1))
        },
      },
    },
    空投地雷1: { refer: '快速生产:寡妇雷:2:3' },
    步兵连队0: { refer: '快速生产:劫掠者:3:5' },
    步兵连队1: { refer: '反应堆:劫掠者' },
    飙车流0: { refer: '快速生产:秃鹫:3:5' },
    飙车流1: 任务(
      'card-entered',
      3,
      card => card.left()?.upgrade_infr(),
      (ci, { target }) => {
        return target.race === 'T'
      }
    ),
    科考小队0: 进场后切换两侧挂件(),
    科考小队1: 任务(
      'store-refreshed',
      2,
      card => card.obtain_unit(rep('歌利亚', card.gold ? 2 : 1)),
      () => true,
      'roundend'
    ),
    陆军学院0: { refer: '科挂:3:战狼:1:2' },
    陆军学院1: { refer: '快速生产:维京战机<机甲>:3:5' },
    空军学院0: { refer: '快速生产:维京战机:3:5' },
    空军学院1: {
      listener: {
        'task-done'() {
          this.obtain_unit(rep('解放者', this.gold ? 2 : 1))
        },
      },
    },
    交叉火力0: { refer: '科挂:4:攻城坦克:1:2' },
    交叉火力1: { refer: '快速生产:歌利亚:3:5' },
    枪兵坦克0: {
      listener: {
        'round-end'() {
          this.$ref$Player.all_of('T').forEach(c => {
            if (c.infr() === '反应堆') {
              c.obtain_unit(rep('陆战队员', this.gold ? 4 : 2))
            }
          })
        },
      },
    },
    斯台特曼0: {
      listener: {
        'fast-produce'() {
          this.around().forEach(ci => {
            ci.replace(ci.find('歌利亚', this.gold ? 2 : 1), elited)
            ci.replace(
              ci.find(['维京战机', '维京战机<机甲>'], this.gold ? 2 : 1),
              elited
            )
          })
        },
      },
    },
    斯台特曼1: {
      listener: {
        'post-enter'() {
          const c = this.left()
          if (c?.race === 'T') {
            c.upgrade_infr()
          }
        },
      },
    },
    护航中队0: { refer: '快速生产:黄昏之翼:1:2' },
    护航中队1: {
      listener: {
        'card-entered'() {
          this.obtain_unit(rep('怨灵战机', this.gold ? 2 : 1))
        },
      },
    },
    泰凯斯0: { refer: '反应堆:陆战队员(精英)' },
    泰凯斯1: {
      listener: {
        'round-end'() {
          this.$ref$Player.all_of('T').forEach(ci => {
            ci.replace(ci.find('陆战队员', this.gold ? 5 : 3), elited)
            ci.replace(ci.find('劫掠者', this.gold ? 5 : 3), elited)
          })
        },
      },
    },
    泰凯斯2: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('医疗运输机', this.gold ? 2 : 1))
        },
      },
    },
    外籍军团0: { refer: '反应堆:牛头人陆战队员' },
    外籍军团1: {
      listener: {
        'post-enter'() {
          this.around().forEach(ci => {
            let nPro = 0,
              nNor = 0
            ci.units.forEach(u => {
              if (u === '陆战队员') {
                nNor++
              } else if (u === '陆战队员(精英)') {
                nPro++
              }
            })
            const nProRest = nPro % 3
            let nProTran = nPro - nProRest,
              nNorTran = 0
            let cnt = nProTran / 3
            if (6 - nProRest * 2 <= nNor) {
              nNorTran += 6 - nProRest * 2
              nNor -= 6 - nProRest * 2
              nProTran += nProRest
              cnt++
            }
            const nNorRest = nNor % 6
            cnt += (nNor - nNorRest) / 6
            nNorTran += nNor - nNorRest
            ci.filter((u, i) =>
              [
                ...ci.find('陆战队员(精英)', nProTran),
                ...ci.find('陆战队员', nNorTran),
              ].includes(i)
            )
            ci.obtain_unit(rep('牛头人陆战队员', cnt))
          })
        },
      },
    },
    钢铁洪流0: { refer: '快速生产:雷神:1:2' },
    钢铁洪流1: 科挂X(5, ci => {
      ci.$ref$Player.all_of('T').forEach(c => {
        c.replace(c.find('攻城坦克', ci.gold ? 2 : 1), elited)
        c.replace(c.find('战狼', ci.gold ? 2 : 1), elited)
      })
    }),
    游骑兵0: {
      listener: {
        'infr-changed'({ target }) {
          target.obtain_unit(rep('雷诺(狙击手)', this.gold ? 2 : 1))
        },
      },
    },
    游骑兵1: { refer: '反应堆:雷诺(狙击手)' },
    沃菲尔德0: {
      listener: {
        'round-end'() {
          this.$ref$Player.all().forEach(ci => {
            ci.replace(ci.find('陆战队员(精英)', this.gold ? 2 : 1), '帝盾卫兵')
          })
        },
      },
    },
    沃菲尔德1: {
      config: {
        unique: 'normal',
      },
      listener: {
        'card-selled'({ target: ci }) {
          if (ci.race !== 'T') {
            return
          }
          if (this.$ref$Player.attrib.get('沃菲尔德') >= (this.gold ? 2 : 1)) {
            return
          }
          this.$ref$Player.attrib.alter('沃菲尔德', 1)
          this.obtain_unit(ci.units.filter(u => isNormal(UnitData[u])))
        },
      },
      note(ci, active) {
        const v = ci.$ref$Player.attrib.get('沃菲尔德')
        return [
          active ? (v < (ci.gold ? 2 : 1) ? `启用 ${v}` : `停用 ${v}`) : '禁用',
        ]
      },
    },
    帝国舰队0: 任务(
      'card-selled',
      3,
      ci => ci.obtain_unit(rep('战列巡航舰', ci.gold ? 2 : 1)),
      () => true,
      'instant'
    ),
    帝国舰队1: { refer: '科挂:4:黄昏之翼:2:4' },
    cloudplayer0: {
      listener: {
        'post-enter'() {
          while (
            this.$ref$Player.all().filter(ci => ci.value() > this.value())
              .length > 2
          ) {
            this.obtain_unit([
              this.$ref$Player.$ref$Game.lcg.one_of(
                this.$ref$Player.$ref$Game.config.ActiveUnit.filter(isRoyalized)
              ),
            ] as UnitKey[])
          }
        },
      },
    },
    牛牛冲鸭0: {
      listener: {
        'round-end'() {
          this.around().forEach(ci => {
            ci.obtain_unit(['牛头人陆战队员'])
          })
        },
      },
    },
    黄昏之翼0: { refer: '快速生产:黄昏之翼:1:2' },
    黄昏之翼1: { refer: '反应堆:黄昏之翼' },
    艾尔游骑兵0: {
      listener: {
        'fast-produce'() {
          this.left()?.obtain_unit(rep('水晶塔', this.gold ? 2 : 1))
        },
      },
    },
    艾尔游骑兵1: {
      listener: {
        'round-end'() {
          this.obtain_unit(
            rep(
              '陆战队员',
              (this.gold ? 8 : 4) *
                this.around()
                  .map(ci => {
                    return ci.filter(u => u === '水晶塔', 1).length
                  })
                  .reduce((a, b) => a + b, 0)
            )
          )
        },
      },
    },
    帝国敢死队0: { refer: '快速生产:诺娃:2:2' },
    帝国敢死队1: { refer: '反应堆:诺娃' },
    帝国敢死队2: {
      listener: {
        'task-done'() {
          this.obtain_unit(rep('诺娃', this.gold ? 2 : 1))
        },
      },
    },
    以火治火0: {
      listener: {
        'round-end'() {
          this.$ref$Player.all_of('T').forEach(c => {
            if (c.infr() === '反应堆') {
              c.obtain_unit(rep('火蝠', this.gold ? 2 : 1))
            }
          })
        },
      },
    },
    以火治火1: {
      listener: {
        'fast-produce'() {
          this.$ref$Player.all_of('T').forEach(ci => {
            ci.replace(ci.find('火蝠', this.gold ? 3 : 2), elited)
          })
        },
      },
    },
    复制中心0: {
      listener: {
        'fast-produce'() {
          const units = this.$ref$Player.hand
            .filter(notNull)
            .map(h => CardData[h.card].unit)
            .map(units => {
              return Object.keys(units)
                .map(u => UnitData[u as UnitKey])
                .filter(u => isNormal(u) && !u.tag.heroic && u.tag.biological)
                .map(u => rep(u.name, units[u.name] ?? 0))
            })
            .flat(2)

          this.obtain_unit(
            this.$ref$Player.$ref$Game.lcg
              .shuffle(units)
              .slice(0, this.gold ? 2 : 1)
          )
        },
      },
    },
    帝国精锐0: { refer: '快速生产:恶蝠游骑兵:1:2' },
    帝国精锐1: {
      listener: {
        'round-end'() {
          this.obtain_unit(
            rep(
              '恶蝠游骑兵',
              Math.floor(
                this.$ref$Player
                  .all()
                  .map(c => c.find('反应堆').length)
                  .reduce((a, b) => a + b, 0) / (this.gold ? 2 : 3)
              )
            )
          )
        },
      },
    },
    黑市商人0: {
      listener: {
        'post-enter'() {
          const sc = this.$ref$Player.$ref$Game.lcg
            .shuffle(PackData.辅助卡.map(c => CardData[c]))
            .slice(0, 2)
          this.$ref$Player.push_discover(
            sc.map(card => ({
              type: 'card',
              card,
            })),
            {
              nodrop: true,
            }
          )
        },
      },
    },
    等待戈多0: { refer: '三连夺取自身' },
    等待戈多1: { refer: '反应堆:鱼人陆战队员' },
  }
}
