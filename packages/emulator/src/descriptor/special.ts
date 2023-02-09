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
import { 任务, 反应堆 } from './terran'

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
    不法之徒_反应堆_0: 反应堆('陆战队员'),
    不法之徒_反应堆_1: 反应堆('陆战队员(精英)'),
    不法之徒0: 任务(
      'store-refreshed',
      4,
      ci => {
        ci.descs = ci.descs.map(s => (s === '不法之徒0' ? '不法之徒1' : s))
        ci.$ref$Player.upgrade_cost = Math.max(
          0,
          ci.$ref$Player.upgrade_cost - 4
        )
        ci.obtain_unit(['反应堆'])
        ci.add_desc('不法之徒_反应堆_0')
      },
      () => true,
      'instant',
      '任务: 刷新4次酒馆\n奖励: 酒馆升级费用降低4并获得反应堆, 生产陆战队员'
    ),
    不法之徒1: 任务(
      'card-entered',
      2,
      ci => {
        ci.descs = ci.descs.map(s => (s === '不法之徒1' ? '不法之徒2' : s))
        ci.obtain_unit(rep('陆战队员', 4))
      },
      () => true,
      'instant',
      '任务: 进场2张卡牌\n奖励: 获得4个陆战队员'
    ),
    不法之徒2: 任务(
      'store-refreshed',
      4,
      ci => {
        ci.descs = ci.descs.map(s => (s === '不法之徒2' ? '不法之徒3' : s))
        ci.obtain_upgrade('强化药剂')
        ci.$ref$Player.push_discover(
          ci.$ref$Player.$ref$Game.pool
            .discover(c => c.level === ci.$ref$Player.level, 3)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
      },
      () => true,
      'instant',
      '任务: 刷新4次酒馆\n奖励: 获得强化药剂升级, 获得当前酒馆等级的卡牌'
    ),
    不法之徒3: 任务(
      'store-refreshed',
      6,
      ci => {
        ci.descs = ci.descs.map(s => (s === '不法之徒3' ? '不法之徒4' : s))
        ci.descs = ci.descs.map(s =>
          s === '不法之徒_反应堆_0' ? '不法之徒_反应堆_1' : s
        )
        ci.$ref$Player.push_discover(
          ci.$ref$Player.$ref$Game.pool
            .discover(c => c.level === ci.$ref$Player.level, 3)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
      },
      () => true,
      'instant',
      '任务: 刷新6次酒馆\n奖励: 获得当前酒馆等级的卡牌, 反应堆生产陆战队员(精英)'
    ),
    不法之徒4: 任务(
      'card-entered',
      4,
      ci => {
        ci.descs = ci.descs.map(s => (s === '不法之徒4' ? '不法之徒5' : s))
        ci.$ref$Player.obtain_resource({
          mineral: 4,
        })
        ci.obtain_unit(rep('攻城坦克', 2))
      },
      () => true,
      'instant',
      '任务: 进场4张卡牌\n奖励: 获得4晶体矿和2攻城坦克'
    ),
    不法之徒5: 任务(
      'card-entered',
      6,
      ci => {
        ci.descs = ci.descs.map(s => (s === '不法之徒5' ? '不法之徒6' : s))
        ci.obtain_unit(['奥丁'])
      },
      () => true,
      'instant',
      '任务: 进场6张卡牌\n奖励: 获得1奥丁'
    ),
    不法之徒6: 任务(
      'card-entered',
      4,
      ci => {
        ci.obtain_unit(['雷神'])
      },
      () => true,
      'instant',
      '任务: 进场4张卡牌\n奖励: 获得1雷神'
    ),
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
          if (target.race !== 'P') {
            target.add_desc('星灵科技')
          }
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
    机械工厂0: 制造(70, '休伯利安号'),
    机械工厂1: 制造(45, '战列巡航舰', 9),
    机械工厂2: 制造(30, '雷神', 6),
    机械工厂3: 制造(16, '攻城坦克', 6),
    '虫卵(跳虫)0': {
      listener: {
        'post-sell'() {
          const eggs = this.$ref$Player.locate('虫卵')
          eggs[0]?.obtain_unit(this.units)
        },
      },
    },
  }
}
