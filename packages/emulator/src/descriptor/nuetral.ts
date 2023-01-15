import {
  AllUpgrade,
  canElite,
  CardData,
  elited,
  isNormal,
  UnitData,
  UnitKey,
} from '@sctavern/data'
import { CardInstance } from '../card'
import { Descriptor } from '../types'
import { mostValueUnit, NotImplementYet, rep } from '../utils'

function 供养(n: number, unit: UnitKey): Descriptor {
  return {
    listener: {
      'post-sell'() {
        const r = this.right(this.attrib.get('oldpos'))
        if (!r) {
          return
        }
        const cnt = this.find('精华').length
        r.obtain_unit(rep(unit, Math.floor(cnt / n)))
        if (r.belong === 'primal') {
          r.obtain_unit(rep('精华', cnt))
        }
      },
    },
  }
}

function 黑暗容器_获得(
  unit: UnitKey,
  normal: number,
  gold: number
): Descriptor {
  return {
    listener: {
      'obtain-darkness'() {
        this.obtain_unit(rep(unit, this.isg() ? gold : normal))
      },
    },
  }
}

function 黑暗容器_复活(req: number) {
  return NotImplementYet()
}

export default function (/* config */): Record<string, Descriptor> {
  return {
    原始蟑螂0: 供养(1, '原始蟑螂'),
    不死队0: 黑暗容器_获得('不死队', 1, 2),
    不死队1: 黑暗容器_复活(8),
    原始刺蛇0: 供养(1, '原始刺蛇'),
    原始刺蛇1: {
      listener: {
        'round-end'() {
          this.obtain_unit([
            ...rep('原始刺蛇', this.isg() ? 2 : 1),
            ...rep('精华', this.isg() ? 4 : 2),
          ])
        },
      },
    },
    原始异龙0: {
      listener: {
        'card-entered'({ target }) {
          target.right()?.obtain_unit(rep('精华', this.isg() ? 2 : 1))
        },
      },
    },
    原始异龙1: {
      listener: {
        'round-end'() {
          if (this.$ref$Player.mineral < 1) {
            return
          }
          this.obtain_unit(
            rep(
              '原始异龙',
              Math.floor(
                this.$ref$Player
                  .all()
                  .map(ci => ci.filter(u => u == '精华').length)
                  .reduce((a, b) => a + b, 0) / 2
              )
            )
          )
        },
      },
    },
    虚空大军0: {
      listener: {
        'round-end'() {
          const n = this.isg() ? 2 : 1
          const cnt = this.$ref$Player.count()
          this.obtain_unit([
            ...rep('歌利亚', cnt.T ? n : 0),
            ...rep('刺蛇', cnt.Z ? n : 0),
            ...rep('龙骑士', cnt.P ? n : 0),
          ])
        },
      },
    },
    鲜血猎手0: 黑暗容器_获得('鲜血猎手', 1, 2),
    鲜血猎手1: 黑暗容器_复活(5),
    暴掠龙0: 供养(2, '暴掠龙'),
    暴掠龙1: {
      listener: {
        'round-end'() {
          this.obtain_unit([
            ...rep('暴掠龙', this.isg() ? 2 : 1),
            ...rep('精华', this.isg() ? 4 : 2),
          ])
        },
      },
    },
    适者生存0: {
      listener: {
        'round-end'() {
          const choice = this.$ref$Player
            .all()
            .map(ci =>
              ci.units
                .map((u, i) => ({
                  unit: UnitData[u],
                  index: i,
                }))
                .filter(
                  info =>
                    isNormal(info.unit) &&
                    info.unit.tag.biological &&
                    canElite(info.unit.name)
                )
                .map(info => ({
                  card: ci,
                  index: info.index,
                }))
            )
            .flat()
          this.$ref$Player.$ref$Game.lcg
            .shuffle(choice)
            .slice(0, this.isg() ? 8 : 5)
            .forEach(({ card, index }) => {
              card.replace([index], elited)
            })
        },
      },
    },
    毁灭者0: {
      listener: {
        'post-sell'() {
          this.left(this.attrib.get('oldpos'))?.obtain_unit(
            rep(
              '毁灭者',
              Math.min(this.isg() ? 30 : 10, this.attrib.get('dark'))
            )
          )
        },
      },
    },
    原始点火虫0: {
      listener: {
        'round-end'() {
          this.obtain_unit(
            rep(
              '原始点火虫',
              Math.max(
                0,
                2 * Math.min(10, this.find('精华').length) -
                  this.find('原始点火虫').length
              )
            )
          )
        },
      },
    },
    原始雷兽0: 供养(4, '原始暴龙兽'),
    原始雷兽1: {
      listener: {
        'round-end'() {
          this.obtain_unit([
            ...rep('原始雷兽', this.isg() ? 2 : 1),
            ...rep('精华', this.$ref$Player.all_of('N').length),
          ])
        },
      },
    },
    马拉什0: {
      listener: {
        'round-end'() {
          this.around().forEach(ci => ci.set_void())
        },
      },
    },
    黑暗预兆0: {
      listener: {
        'round-end'() {
          const cnt = this.$ref$Player.count()
          if (cnt.T && cnt.Z && cnt.P && cnt.N) {
            this.obtain_unit(rep('混合体毁灭者', this.isg() ? 4 : 2))
          }
        },
      },
    },
    阿拉纳克0: {
      listener: {
        'post-enter'() {
          const cs = this.$ref$Player.all().filter(c => c !== this)
          if (cs.length === 0) {
            return
          } else if (cs.length > 2) {
            this.$ref$Player.$ref$Game.lcg.shuffle(cs)
          }
          cs.slice(0, 2).forEach(ci => {
            this.seize(ci, {
              fake: true,
              withUpgrade: true,
            })
          })
        },
      },
    },
    天罚行者0: {
      listener: {
        'post-enter'() {
          const dark = this.$ref$Player
            .all()
            .filter(c => c.level <= 4 && c.attrib.has('dark'))
            .map(c => {
              const d = c.attrib.get('dark')
              if (d) {
                c.gain_darkness(-d)
              }
              return d
            })
            .reduce((a, b) => a + b, 0)
          this.obtain_unit(rep('天罚行者', Math.floor(dark / 5)))
          this.gain_darkness(dark)
        },
      },
    },
    天罚行者1: {
      listener: {
        'round-end'() {
          this.obtain_unit(
            rep(
              '天罚行者',
              (this.isg() ? 2 : 1) *
                Math.min(2, Math.floor(this.attrib.get('dark') / 10))
            )
          )
        },
      },
    },
    德哈卡0: {
      listener: {
        'card-selled'({ target }) {
          if (target.find('精华').length >= 3) {
            this.obtain_unit(rep('德哈卡分身', this.isg() ? 4 : 2))
          }
        },
      },
    },
    德哈卡1: {
      config: {
        unique: 'left',
      },
      listener: {
        'round-end'() {
          if (this.$ref$Player.mineral >= 1) {
            this.attrib.set('启用', 1)
          }
        },
        'round-start'() {
          if (this.attrib.get('启用')) {
            this.attrib.set('启用', 0)
            this.$ref$Player.enter_discover(
              this.$ref$Player.$ref$Game.pool
                .discover(c => c.belong === 'primal' && c.level < 5, 3)
                .map(card => ({
                  type: 'card',
                  card,
                }))
            )
          }
        },
      },
    },
    我叫小明0: {
      listener: {
        'post-enter'() {
          const left = this.left()
          if (!left) {
            return
          }
          if (left.level >= 1 && left.level <= 6 && left.occupy.length > 0) {
            this.$ref$Player.obtain_card(left.occupy[0])
          }
          left.obtain_upgrade('星空加速')
          left.seize(this)
        },
      },
    },
    豆浆油条KT10: {
      listener: {
        'post-enter'() {
          ;[this, ...this.around()].forEach(ci => {
            ci.obtain_upgrade(
              this.$ref$Player.$ref$Game.lcg.shuffle(
                AllUpgrade.filter(u => !ci.upgrades.includes(u))
              )[0]
            )
          })
        },
      },
    },
    豆浆油条0: {
      listener: {
        'round-end'() {
          this.$ref$Player
            .all()
            .filter(ci => ci.index() > this.index())
            .forEach(ci => ci.set_void())
        },
      },
    },
    战斗号角0: {
      listener: {
        'card-selled'({ target }) {
          const { unit } = mostValueUnit(
            target.units.filter(u => isNormal(UnitData[u]))
          )
          if (unit) {
            this.obtain_unit([unit])
          }
        },
      },
    },
    凯瑞甘0: {
      listener: {
        'post-enter'() {
          if (this.around().filter(c => c.name === '凯瑞甘').length > 0) {
            return
          }
          const l = this.left()
          if (l) {
            this.seize(l, {
              fake: true,
            })
          }
        },
      },
    },
    凯瑞甘1: {
      listener: {
        'post-enter'() {
          const ar = this.around().filter(c => c.name === '凯瑞甘')
          if (ar.length === 0) {
            this.obtain_upgrade('献祭')
            return
          }
          const ci = ar[0]
          ci.name = '刀锋女王'
          ci.clear_desc()
          ci.load_desc(CardData['刀锋女王'])
          ci.replace(ci.find('莎拉·凯瑞甘', 1), '刀锋女王')
          this.$ref$Player.destroy(this)
        },
      },
    },
    刀锋女王0: NotImplementYet(),
  }
}
