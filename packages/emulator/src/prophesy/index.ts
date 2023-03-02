import {
  canElite,
  elited,
  AllProphesy,
  ProphesyData,
  isNormal,
  UnitData,
  CardKey,
  RoleKey,
} from '@sctavern/data'
import type { ProphesyKey } from '@sctavern/data'
import type { DiscoverItem, ProphesyImpl, RoleProphesyImpl } from '../types'
import { randomUpgrades, rep } from '../utils'

export function CreateProphesyTable() {
  const res: {
    [key in ProphesyKey]?: Partial<RoleProphesyImpl>
  } = {
    混沌洪流: {
      init() {
        this.attrib.mode = 1
      },
    },
    无限融合: {
      init() {
        this.attrib.mode = 2
      },
    },
    狂热冲锋: {
      init(player) {
        this.attrib.mode = 1
        while (player.level < 4) {
          player.do_tavern_upgrade()
        }
      },
    },
    能量提速: {
      init() {
        this.attrib.mode = 2
      },
    },
    自动装填: {
      init() {
        this.attrib.mode = 1
      },
    },
    紧急征召: {
      init() {
        this.attrib.mode = 2
        this.record = {}
      },
    },
    收割行动: {
      init() {
        this.attrib.mode = 1
      },
    },
    强化药剂: {
      init() {
        this.attrib.mode = 2
        this.attrib.speed = 0
      },
      listener: {
        'battle-result'({ win }) {
          if (this.attrib.mode === 2) {
            if (win) {
              this.attrib.speed += 12
            }
          }
        },
      },
      count() {
        return this.attrib.speed
      },
    },
    幽灵报道: {
      init(player) {
        this.attrib.mode = 1
        this.progress.max = -1
        this.progress.cur = -1
        this.enable = true
        player.enter('幽灵报道')
      },
    },
    暗影猎杀: {
      init() {
        this.attrib.mode = 2
      },
    },
    寄生细胞: {
      init() {
        this.attrib.mode = 1
      },
    },
    双生虫卵: {
      init() {
        this.attrib.mode = 2
      },
    },
    备用钻头: {
      init() {
        this.attrib.mode = 1
        this.progress.cur = 3
      },
    },
    自动修理: {
      init() {
        this.attrib.mode = 2
      },
    },
    进化分支: {
      init() {
        this.attrib.mode = 1
      },
    },
    改造突变: {
      init() {
        this.attrib.mode = 2
        this.progress.cur = 0
      },
      listener: {
        'battle-result'({ win }) {
          if (win) {
            this.progress.cur += 2
          } else {
            this.progress.cur += 1
          }
        },
      },
    },
    过量采集: {
      init() {
        this.attrib.mode = 1
      },
    },
    采集蜂群: {
      init() {
        this.attrib.mode = 2
        this.enable = true
      },
    },
    充气甲壳: {
      init() {
        this.attrib.mode = 1
      },
    },
    超距视界: {
      init() {
        this.attrib.mode = 2
      },
    },
    再生护甲: {
      init() {
        this.attrib.mode = 1
        this.attrib.shield = 0
      },
      listener: {
        'round-end'(m, player) {
          player.life = Math.min(100, player.life + 10)
        },
        'battle-result'({ win }) {
          if (!win) {
            this.attrib.shield += 4
          }
        },
      },
      count() {
        return this.attrib.shield ?? 0
      },
    },
    荆棘外壳: {
      init() {
        this.attrib.mode = 2
      },
    },
    护盾封存: {
      init() {
        this.attrib.mode = 1
      },
    },
    能量视界: {
      init() {
        this.attrib.mode = 2
      },
    },
    暗影追踪: {
      init() {
        this.attrib.mode = 1
        this.enhance = true
        this.progress.cur = -1
      },
    },
    闪现充能: {
      init(player) {
        this.attrib.mode = 2
        player.attrib.alter('free-refresh', 5)
      },
      listener: {
        'round-enter'(m, player) {
          player.attrib.alter('free-refresh', 5)
        },
      },
    },
    灵能传送: {
      init() {
        this.attrib.mode = 1
        this.progress.cur = -1
        this.enable = true
      },
      listener: {
        'tavern-upgraded'() {
          this.enable = true
        },
      },
    },
    共鸣之刃: {
      init() {
        this.attrib.mode = 2
        this.progress.cur = -1
        this.enhance = true
      },
      listener: {
        'round-enter'(m, player) {
          this.enhance = true
          if (this.record) {
            player.obtain_card(this.record as CardKey)
            this.record = null
          }
        },
        bought({ cardt }) {
          if (this.enhance) {
            this.record = cardt
            this.enhance = false
          }
        },
      },
    },
    超量采集: {
      init(player) {
        this.attrib.mode = 1
        this.enable = false
        player.mineral_max = 18
        player.mineral = 18
        player.config.MineralLimitDelta = -1
      },
    },
    附属钻头: {
      init(player) {
        this.attrib.mode = 2
        this.enable = false
        player.config.MaxMineral = 20
      },
      listener: {
        'round-enter'(m, player) {
          player.mineral_max = Math.min(
            player.config.MaxMineral,
            player.mineral_max + 1
          )
        },
      },
    },
    机械气罐: {
      init() {
        this.attrib.mode = 1
      },
      listener: {
        'card-selled'(m, player) {
          player.obtain_resource({
            gas: 1,
          })
        },
      },
    },
    爆裂核心: {
      init() {
        this.attrib.mode = 2
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
    },
    金光普照: {
      init() {
        this.attrib.mode = 1
        this.enable = false
      },
      listener: {
        'card-entered'({ target }) {
          if (target.level < 6) {
            target.gold = true
            target.obtain_upgrade('金光闪闪')
          }
        },
      },
    },
    限制解除: {
      init() {
        this.attrib.mode = 2
        this.attrib.used = 0
      },
    },
    光影集结: {
      init() {
        this.attrib.mode = 1
        this.enable = true
        this.progress.cur = -1
        this.progress.max = -1
      },
    },
    能量阵列: {
      init(player) {
        this.attrib.mode = 2
        player.config.ProtossPowerMultiplier = 5
      },
    },
    搜寻样本: {
      init(player) {
        this.attrib.mode = 1
        this.progress.cur = 0
        this.progress.max = -1
        this.enable = false

        player.obtain_resource({
          mineral: -3,
        })
        const ci = player.enter('科学观察')
        if (ci) {
          ci.obtain_upgrade('搜寻样本')
          ci.units.pop() // 移除进场时获得的单位
        }
      },
    },
    电磁干扰: {
      init() {
        this.attrib.mode = 2
        this.progress.cur = 3
        this.progress.max = 3
      },
    },
    核心超载: {
      init() {
        this.attrib.mode = 1
        this.enable = true
      },
    },
    虫洞传送: {
      init(player) {
        this.attrib.mode = 2
        player.enter('母舰核心(PVE)')
        player.combine('母舰核心(PVE)', true)
      },
    },
    精装钢板: {
      init() {
        this.attrib.mode = 1
      },
    },
    智能伺服: {
      init() {
        this.attrib.mode = 2
      },
    },
    适应细胞: {
      init() {
        this.attrib.mode = 1
      },
    },
    完全拟态: {
      init(player) {
        this.attrib.mode = 2
        this.enable = false
        this.attrib.extraRoleId = player.roles.length
        this.attrib.cleanProphesyId = -1
      },
      listener: {
        'round-enter'(m, player) {
          if (this.attrib.cleanProphesyId !== -1) {
            player.prophesy.splice(this.attrib.cleanProphesyId, 1)
            this.attrib.cleanProphesyId = -1
          }
          const prophesySet: ProphesyKey[] = [
            '混沌洪流',
            '自动装填',
            '寄生细胞',
            '自动修理',
            '采集蜂群',
            '超距视界',
            '荆棘外壳',
            '护盾封存',
            '爆裂核心',
            '光影集结',
            '精装钢板',
            '智能伺服',
            // 能量磁场, 治疗循环, 形体降临
          ]
          this.attrib.discoverId = player.push_discover(
            player.$ref$Game.lcg
              .shuffle(prophesySet.map(x => x))
              .slice(0, 4)
              .map(str => ({
                type: 'custom',
                str,
              }))
          )
        },
        'discover-finish'({ ctx }, player) {
          if (ctx.id !== this.attrib.discoverId) {
            return
          }
          const p = (ctx.item[ctx.choice] as DiscoverItem & { type: 'custom' })
            .str as ProphesyKey
          const pd = ProphesyData[p]
          player.set_role(this.attrib.extraRoleId, pd.type as RoleKey)
          this.attrib.cleanProphesyId = player.prophesy.length
          player.load_prophesy(p)
        },
      },
    },
    虚空水晶: {
      init() {
        this.attrib.mode = 1
      },
    },
    扩散立场: {
      init(player) {
        this.attrib.mode = 2
        player.config.ProtossPowerAll = true

        player.obtain_resource({
          mineral: -3,
        })
        const ci = player.enter('水晶阵列')
        if (ci) {
          ci.units.pop() // 移除进场时获得的水晶塔
        }
      },
    },
    天降神兵: {
      init(player) {
        this.attrib.mode = 1
        this.progress.cur = 0

        const ci = player.locate('不法之徒')[0]
        ci.color = 'red'
        ci.level = 7
        ci.name = '天降神兵'
        ci.replace_desc('不法之徒0', '天降神兵0')
      },
    },
    红色按钮: {
      init(player) {
        this.attrib.mode = 1
        const ci = player.locate('不法之徒')[0]
        ci.color = 'red'
        ci.level = 7
        ci.replace_desc('不法之徒0', '不法之徒X0')
      },
      listener: {
        'obtain-upgrade'({ card }, player) {
          player.present[card]?.card.obtain_unit(rep('陆战队员(精英)', 3))
        },
      },
    },
    装备模块: {
      init() {
        this.attrib.mode = 1
      },
    },
    备用武器: {
      init() {
        this.attrib.mode = 2
        this.enable = true
      },
    },
    拆解工程: {
      init() {
        this.attrib.mode = 1
      },
      listener: {
        'card-selled'(m, player) {
          player.locate('机械工厂').forEach(ci => {
            ci.obtain_unit(rep('零件', 4))
          })
        },
      },
    },
    零件交易: {
      init() {
        this.attrib.mode = 2
      },
      listener: {
        'card-disappeared'({ target, method }, player) {
          if (target.name === '机械工厂' && method === 'sell') {
            player.obtain_resource({
              mineral: 1,
            })
          }
        },
      },
    },
    虚空意志: {
      init() {
        this.attrib.mode = 1
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
    },
    形体降临: {
      init() {
        this.attrib.mode = 2
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
    },
  }
  const resg: {
    [key in ProphesyKey]?: Partial<ProphesyImpl>
  } = {
    地下交易: {
      init() {
        this.obtain_resource({
          mineral: 3,
        })
      },
    },
    补给空投: {
      init() {
        const res = this.$ref$Game.pool.discover(c => c.level === this.level, 1)
        if (res) {
          this.obtain_card(res[0].name)
        }
      },
    },
    挖宝奇兵: {
      init() {
        const res = this.$ref$Game.pool.discover(c => c.name === '挖宝奇兵', 1)
        if (res) {
          this.obtain_card(res[0].name)
        }
      },
    },
    升变: {
      init() {
        this.upgrade_cost = Math.max(0, this.upgrade_cost - 4)
      },
    },
    黄金矿工: {
      init() {
        this.$ref$Game.lcg.one_of(this.all())?.obtain_upgrade('黄金矿工')
      },
    },
    能量扩散: {
      init() {
        this.attrib.alter('free-refresh', 10)
      },
    },
    人海战术: {
      init() {
        this.push_discover(
          this.$ref$Game.pool
            .discover(c => c.level === 1, 4)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
      },
    },
    时间停止: {},
    暗影刷新: {
      init() {
        this.do_refresh(req =>
          this.$ref$Game.pool.discover(
            c => c.level === Math.min(6, this.level + 1),
            req,
            false
          )
        )
      },
    },
    萃取瓦斯: {
      init() {
        this.gas = this.gas_max
      },
    },

    过量补给: {
      init() {
        this.obtain_resource({
          mineral: this.$ref$Game.lcg.int(20, 1),
        })
      },
    },
    终极发现: {
      init() {
        this.do_refresh(req =>
          this.$ref$Game.pool.discover(c => c.level === 6, req, false)
        )
      },
    },
    精英学院: {
      listener: {
        'round-leave'() {
          this.all().forEach(ci => {
            ci.replace(
              ci.find(u => canElite(this.$ref$Game.config.ActiveUnit, u)),
              elited
            )
          })
        },
      },
    },
    强化升级: {
      init() {
        while (this.level < 6) {
          this.do_tavern_upgrade()
        }
      },
    },
    水晶聚能: {
      listener: {
        'card-selled'({ target }) {
          if (target.find(['水晶塔', '虚空水晶塔']).length > 0) {
            this.obtain_resource({
              mineral: 1,
            })
          }
        },
      },
    },
    研发计划: {
      init() {
        this.persisAttrib.set('研发计划', 0)
      },
      listener: {
        'card-entered'() {
          if (this.persisAttrib.alter('研发计划', 1) === 4) {
            this.persisAttrib.set('研发计划', 0)
            this.push_discover(
              this.$ref$Game.pool
                .discover(c => c.race === 'T', 3)
                ?.map(card => ({
                  type: 'card',
                  card,
                }))
            )
          }
        },
      },
      count() {
        return this.persisAttrib.get('研发计划')
      },
    },
    净化数据网: {
      listener: {
        'round-start'() {
          const ci = this.present[6]?.card
          if (ci) {
            ci.gold = true
          }
        },
      },
    },
    机械感染: {
      init() {
        this.config.ZergEggRestrictBiological = false
        this.config.ZergHatchRestrictBiological = false
      },
      listener: {
        hatch({ from }) {
          if (from.name === '虫卵') {
            this.obtain_resource({
              mineral: 6,
            })
          }
        },
      },
    },
    虚空风暴: {
      init() {
        this.persisAttrib.set('虚空风暴', 0)
      },
      listener: {
        'store-refreshed'() {
          if (this.persisAttrib.alter('虚空风暴', 1) === 3) {
            this.persisAttrib.set('虚空风暴', 0)
            this.all()
              .filter(
                ci => ci.attrib.get('void') && ci.level >= 1 && ci.level <= 5
              )
              .forEach(ci => {
                const u = this.$ref$Game.lcg.one_of(
                  ci.units.filter(u => isNormal(UnitData[u]))
                )
                if (u) {
                  ci.obtain_unit([u])
                }
              })
          }
        },
      },
      count() {
        return this.persisAttrib.get('虚空风暴')
      },
    },
    能量预兆: {},
    鲜血仪式: {
      init() {
        this.config.BuyResource = 'life'
        this.nextAttrib.set('鲜血仪式', 1)
      },
      listener: {
        'round-start'() {
          if (this.attrib.get('鲜血仪式')) {
            this.attrib.set('鲜血仪式', 0)
            this.config.BuyResource = 'mineral'
          }
        },
      },
    },

    灵能特训: {
      init() {
        this.attrib.alter('free-refresh', 10)
      },
      listener: {
        'round-enter'() {
          this.attrib.alter('free-refresh', 10)
        },
      },
    },
    作战资源方案: {
      listener: {
        'get-buy-cost'(m) {
          m.cost = Math.min(2, m.cost)
        },
      },
    },
    废弃试验品: {
      init() {
        const ps = AllProphesy.map(p => ProphesyData[p]).filter(
          p => p.type === 1
        )
        this.push_discover(
          this.$ref$Game.lcg
            .shuffle(ps)
            .slice(0, 4)
            .map(prophesy => ({
              type: 'prophesy',
              prophesy,
            }))
        )

        this.push_discover(
          this.$ref$Game.lcg
            .shuffle(ps)
            .slice(0, 4)
            .map(prophesy => ({
              type: 'prophesy',
              prophesy,
            }))
        )
      },
    },
    战术装备: {
      init() {
        this.config.MaxUpgradePerCard += 3
        this.all().forEach(ci => {
          ci.config.MaxUpgrade += 3
          // 必须一个一个获得, 因为可以获得重复的升级, 以及可以获得获得过的升级
          for (let i = 0; i < 3; i++) {
            ci.obtain_upgrade(
              randomUpgrades(this.$ref$Game.lcg, 1, u => u !== '轨道空降')[0]
            )
          }
        })
      },
    },
    死亡阴影: {
      init() {
        this.all().forEach(ci => {
          ci.set_void()
          ci.obtain_upgrade('虚空能量')
        })
      },
    },
    相位提速: {
      init() {
        this.attrib.set('相位提速', 0)
      },
      listener: {
        'round-enter'() {
          this.attrib.set('相位提速', 0)
        },
        'card-selled'({ target }) {
          this.attrib.set(
            '相位提速',
            Math.min(100, this.attrib.get('相位提速') + target.units.length)
          )
        },
      },
      count() {
        return this.attrib.get('相位提速')
      },
    },
    鲜血狂热: {
      init() {
        this.all().forEach(ci => {
          ci.obtain_upgrade('鲜血狂热')
        })
      },
    },
    点石成金: {
      init() {
        this.all().forEach(ci => {
          ci.gold = true
          ci.obtain_upgrade('金光闪闪')
        })
      },
    },
  }
  for (const p in res) {
    const impl = res[p as keyof typeof res] as Partial<RoleProphesyImpl>
    impl.init = impl.init || (() => void 0)
    impl.listener = impl.listener || {}
  }
  for (const p in resg) {
    const impl = resg[p as keyof typeof resg] as Partial<ProphesyImpl>
    impl.init = impl.init || (() => void 0)
    impl.listener = impl.listener || {}
  }
  return {
    ...res,
    ...resg,
  } as Record<ProphesyKey, ProphesyImpl | RoleProphesyImpl>
}

const t = CreateProphesyTable()

export default t
