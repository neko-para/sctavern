import {
  isNormal,
  isSpecialStructure,
  UnitData,
  PackData,
  CardData,
  CardKey,
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
        const k = this.gold ? eachg : eachn
        const n = Math.floor(this.find('自动机炮').length / k)
        this.filter('自动机炮', n * k)
        this.obtain_unit(rep(into, k * (this.gold ? countg : countn)))
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
      text: ['每回合开始时, 获得1晶体矿', '每回合开始时, 获得1晶体矿'],
    },
    黄金矿工1: {
      listener: {
        'post-sell'() {
          this.$ref$Player.obtain_resource({
            mineral: 2,
          })
        },
      },
      text: ['出售时, 获得3晶体矿', '出售时, 获得3晶体矿'],
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
                .map(u => UnitData[u].health + (UnitData[u].shield ?? 0))
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
    精神控制: {
      listener: {
        'round-end'() {
          const cards = this.$ref$Player.$ref$Game.lcg
            .shuffle(
              this.$ref$Player.store
                .map((store, index) => ({
                  store,
                  index,
                }))
                .filter(x => x.store)
            )
            .slice(0, 2)
          this.$ref$Player.$ref$Game.pool.drop(
            cards.map(({ store, index }) => {
              this.$ref$Player.store[index] = null
              this.load_unit(CardData[store?.card as CardKey])
              return CardData[store?.card as CardKey]
            })
          )
        },
      },
    },
    潜能超载: {
      listener: {
        'round-start'() {
          this.$ref$Player.destroy(this)
        },
      },
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
    科学观察0: NotImplementYet(),
    母舰核心0: NotImplementYet(),
    母舰核心1: NotImplementYet(),
    '母舰核心(PVE)0': NotImplementYet(),
    '母舰核心(PVE)1': NotImplementYet(),
    毒气炮塔0: 自动机炮转换(3, 2, '毒气炮塔'),
    毒气炮塔1: {
      listener: {
        'post-sell'() {
          this.$ref$Player.obtain_resource({
            mineral: this.gold ? 2 : 1,
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
          this.obtain_unit(rep('岗哨机枪', this.gold ? 3 : 2))
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
          this.obtain_unit(rep('零件', this.gold ? 2 : 1))
          this.replace(this.find('自动机炮'), '零件')
        },
      },
    },
    星门1: 制造(6, '星门'),
    自动机炮0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('自动机炮', this.gold ? 2 : 1))
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
      ci => ci.obtain_unit(rep('零件', ci.gold ? 2 : 1)),
      () => true,
      'roundend'
    ),
    导弹基地0: 自动机炮转换(1, 1, '风暴对地导弹塔', 2, 2),
    导弹基地1: {
      listener: {
        'task-done'() {
          this.obtain_unit(rep('风暴对地导弹塔', this.gold ? 3 : 2))
        },
      },
    },
    粒子光炮0: {
      listener: {
        'round-end'() {
          this.around().forEach(ci => {
            this.obtain_unit(ci.filter('自动机炮', this.gold ? 2 : 1))
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
          this.obtain_unit(rep('热辣贝蒂', this.gold ? 2 : 1))
        },
      },
    },
    拟态雏虫0: NotImplementYet(),
    水晶阵列0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('过载水晶塔', Math.floor(this.power() / 5)))
        },
      },
    },
    不法之徒_反应堆_0: { refer: '反应堆:陆战队员' },
    不法之徒_反应堆_1: { refer: '反应堆:陆战队员(精英)' },
    不法之徒0: 任务(
      'store-refreshed',
      4,
      ci => {
        ci.replace_desc('不法之徒0', '不法之徒1')
        ci.level += 1
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
        ci.replace_desc('不法之徒1', '不法之徒2')
        ci.level += 1
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
        ci.replace_desc('不法之徒2', '不法之徒3')
        ci.level += 1
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
        ci.replace_desc('不法之徒3', '不法之徒4')
        ci.level += 1
        ci.replace_desc('不法之徒_反应堆_0', '不法之徒_反应堆_1')
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
        ci.replace_desc('不法之徒4', '不法之徒5')
        ci.level += 1
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
        ci.replace_desc('不法之徒5', '不法之徒6')
        ci.level += 1
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
    天降神兵0: 任务(
      'task-done',
      6,
      ci => {
        ci.$ref$Player.all().forEach(ci => {
          ci.attrib.set('task', 0)
        })
        ci.$ref$Player.find_role('泰凯斯').progress.cur += 1
      },
      () => true,
      'instant',
      '任务: 完成6个任意卡牌任务\n奖励: 将所有卡牌的任务重置并在下次战斗开始时发射一枚核弹'
    ),
    不法之徒X0: 任务(
      'tavern-upgraded',
      1,
      ci => {
        ci.replace_desc('不法之徒X0', '不法之徒X1')
        ci.obtain_unit(['反应堆'])
        ci.add_desc('不法之徒_反应堆_1')
      },
      () => true,
      'instant',
      '任务: 升级1次酒馆等级\n奖励: 获得反应堆, 生产陆战队员(精英)'
    ),
    不法之徒X1: 任务(
      'store-refreshed',
      3,
      ci => {
        ci.replace_desc('不法之徒X1', '不法之徒X2')
        ci.$ref$Player.$ref$Game.pool
          .discover(c => c.level === ci.$ref$Player.level, 2, false)
          ?.map(c => c.name)
          .map(card => {
            ci.$ref$Player.obtain_card(card)
          })
      },
      () => true,
      'instant',
      '任务: 刷新3次酒馆\n奖励: 获得两张当前酒馆等级的随机卡牌'
    ),
    不法之徒X2: 任务(
      'card-entered',
      4,
      ci => {
        ci.replace_desc('不法之徒X2', '不法之徒X3')
        ci.$ref$Player.obtain_resource({
          mineral: 3,
        })
      },
      () => true,
      'instant',
      '任务: 进场4张卡牌\n奖励: 获得3晶体矿, 强化陆战队员(精英)的武器和技能'
    ),
    不法之徒X3: 任务(
      'store-refreshed',
      4,
      ci => {
        ci.replace_desc('不法之徒X3', '不法之徒X4')
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
      '任务: 刷新4次酒馆\n奖励: 发现一张当前酒馆等级的卡牌'
    ),
    不法之徒X4: 任务(
      'card-entered',
      6,
      ci => {
        ci.replace_desc('不法之徒X4', '不法之徒X5')
        ci.$ref$Player.push_discover(
          ci.$ref$Player.$ref$Game.pool
            .discover(c => c.level === 6, 3)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
      },
      () => true,
      'instant',
      '任务: 进场6张卡牌\n奖励: 发现一张星级为6的卡牌, 强化劫掠者(精英)的武器和技能'
    ),
    不法之徒X5: 任务(
      'store-refreshed',
      10,
      ci => {
        ci.replace_desc('不法之徒X5', '不法之徒X6')
        ci.$ref$Player.load_prophesy('精英学院')
      },
      () => true,
      'instant',
      '任务: 刷新10次酒馆\n奖励: 获得神器预言精英学院'
    ),
    不法之徒X6: 任务(
      'card-entered',
      4,
      ci => {
        ci.replace_desc('不法之徒X6', '不法之徒X7')
        ci.obtain_unit(['奥丁'])
      },
      () => true,
      'instant',
      '任务: 进场4张卡牌\n奖励: 获得1奥丁, 战斗开始时发射核弹'
    ),
    不法之徒X7: 任务(
      'obtain-upgrade',
      1,
      (ci, msg) => {
        ci.$ref$Player
          .all()
          .filter(c => c !== ci)
          .forEach(c => {
            c.obtain_upgrade(msg.upgrade)
          })
      },
      () => true,
      'instant',
      '任务: 不法之徒获得1次升级\n奖励: 为所有其他卡牌添加相同升级'
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
          const into = target.around().filter(ci => ci.name !== '虫卵')
          this.$ref$Player.destroy(target)
          if (into.length > 0) {
            into[0].obtain_unit(units)
          }
        },
      },
    },
    ['紧急回收+0']: {
      listener: {
        'post-deploy'({ target }) {
          const into = target.around().filter(ci => ci.name !== '虫卵')
          this.$ref$Player.destroy(target)
          if (into.length > 0) {
            into[0].obtain_unit(target.units)
          }
        },
      },
    },
    星灵科技: {
      listener: {
        'round-end'() {
          this.$ref$Player.warp(rep('陆战队员', this.gold ? 2 : 1))
        },
      },
      text: ['每回合结束时, 折跃1陆战队员', '每回合结束时, 折跃2陆战队员'],
    },
    ['星灵科技+']: {
      listener: {
        'round-end'() {
          this.$ref$Player.warp(rep('歌利亚', this.gold ? 2 : 1))
        },
      },
      text: ['每回合结束时, 折跃1歌利亚', '每回合结束时, 折跃2歌利亚'],
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
    ['星灵科技+0']: {
      listener: {
        'post-deploy'({ target }) {
          if (target.race !== 'P') {
            target.add_desc('星灵科技+')
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
    ['尖端科技+0']: {
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
    ['超负荷+0']: {
      listener: {
        'post-deploy'({ target }) {
          if (target.occupy.length > 0) {
            this.$ref$Player.obtain_card(target.occupy[0])
          }
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
