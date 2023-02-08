import {
  isNormal,
  isSpecialStructure,
  UnitData,
  PackData,
  CardData,
} from '@sctavern/data'
import type { UnitKey, Race } from '@sctavern/data'
import type { Descriptor } from '../types'
import { NotImplementYet, rep } from '../utils'
import { 任务 } from './terran'

function 自动机炮转换(
  eachn: number,
  eachg: number,
  into: UnitKey,
  countn = 1,
  countg = 1
): Descriptor {
  return {
    listener: {
      'round-end'() {
        const k = this.isg() ? eachg : eachn
        const n = Math.floor(this.find('自动机炮').length / k)
        this.filter('自动机炮', n * k)
        this.obtain_unit(rep(into, k * (this.isg() ? countg : countn)))
      },
    },
  }
}

function 制造(req: number, unit: UnitKey, cnt = 1): Descriptor {
  return {
    listener: {
      'round-end'() {
        const idx = this.find('零件', req)
        if (idx.length === req) {
          this.filter((u, p) => idx.includes(p))
          this.obtain_unit(rep(unit, cnt))
        }
      },
    },
  }
}

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
    母舰核心0: NotImplementYet(),
    母舰核心1: NotImplementYet(),
    毒气炮塔0: 自动机炮转换(3, 2, '毒气炮塔'),
    毒气炮塔1: {
      listener: {
        'post-sell'() {
          this.$ref$Player.obtain_resource({
            mineral: this.isg() ? 2 : 1,
          })
        },
      },
    },
    凯达琳巨石0: 自动机炮转换(5, 4, '凯达琳巨石'),
    凯达琳巨石1: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('自动机炮', this.$ref$Player.all_of('P').length))
        },
      },
    },
    岗哨机枪0: 自动机炮转换(1, 1, '岗哨机枪', 2, 2),
    岗哨机枪1: {
      listener: {
        'card-entered'() {
          this.obtain_unit(rep('岗哨机枪', this.isg() ? 3 : 2))
        },
      },
    },
    行星要塞0: 自动机炮转换(5, 4, '行星要塞'),
    行星要塞1: {
      config: {
        unique: 'normal',
      },
      listener: {
        'card-selled'({ target }) {
          if (target.race === 'N') {
            this.obtain_unit(
              target.filter(
                u =>
                  !isSpecialStructure(UnitData[u]) &&
                  !!UnitData[u].tag.structure
              )
            )
          }
        },
      },
    },
    星门0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('零件', this.isg() ? 2 : 1))
          this.replace(this.find('自动机炮'), '零件')
        },
      },
    },
    星门1: 制造(6, '星门'),
    自动机炮0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('自动机炮', this.isg() ? 2 : 1))
        },
      },
    },
    自动机炮1: {
      listener: {
        'post-sell'() {
          const ar = this.around(this.attrib.get('oldpos'))
          if (!ar.length) {
            return
          }
          const cnt = this.find('自动机炮').length
          ar[0].obtain_unit(rep('自动机炮', cnt))
        },
      },
    },
    作战中心0: 制造(6, '作战指挥中心'),
    作战中心1: 任务(
      'card-entered',
      2,
      ci => ci.obtain_unit(rep('零件', ci.isg() ? 2 : 1)),
      () => true,
      'roundend'
    ),
    导弹基地0: 自动机炮转换(1, 1, '风暴对地导弹塔', 2, 2),
    导弹基地1: {
      listener: {
        'task-done'() {
          this.obtain_unit(rep('风暴对地导弹塔', this.isg() ? 3 : 2))
        },
      },
    },
    粒子光炮0: {
      listener: {
        'round-end'() {
          this.around().forEach(ci => {
            this.obtain_unit(ci.filter('自动机炮', this.isg() ? 2 : 1))
          })
          this.replace(this.find('自动机炮'), '零件')
        },
      },
    },
    粒子光炮1: 制造(9, '粒子光炮'),
    再生钢0: 自动机炮转换(2, 2, '热辣贝蒂'),
    再生钢1: {
      listener: {
        'obtain-upgrade'() {
          this.$ref$Player.push_discover(
            this.$ref$Player.$ref$Game.lcg
              .shuffle(PackData['行星要塞衍生'].map(c => CardData[c]))
              .slice(0, 3)
              .map(card => ({
                type: 'card',
                card,
              }))
          )
          this.obtain_unit(rep('热辣贝蒂', this.isg() ? 2 : 1))
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
