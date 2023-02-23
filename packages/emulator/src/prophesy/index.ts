import { canElite, elited, AllProphesy, ProphesyData } from '@sctavern/data'
import type { UpgradeKey, ProphesyKey } from '@sctavern/data'
import type { ProphesyImpl } from '../types'
import { randomUpgrades, rep } from '../utils'

export function CreateProphesyTable() {
  const res: {
    [key in ProphesyKey]?: Partial<ProphesyImpl>
  } = {
    混沌洪流: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    无限融合: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    狂热冲锋: {
      init() {
        this.role.attrib.mode = 1
        while (this.level < 4) {
          this.do_tavern_upgrade()
        }
      },
    },
    能量提速: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    自动装填: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    紧急征召: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    收割行动: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    强化药剂: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    幽灵报道: {
      init() {
        this.role.attrib.mode = 1
        this.role.progress.max = -1
        this.role.progress.cur = -1
        this.role.enable = true
        this.enter('幽灵报道')
      },
    },
    暗影猎杀: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    寄生细胞: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    双生虫卵: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    备用钻头: {
      init() {
        this.role.attrib.mode = 1
        this.role.progress.cur = 3
      },
    },
    自动修理: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    进化分支: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    改造突变: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    过量采集: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    采集蜂群: {
      init() {
        this.role.attrib.mode = 2
        this.role.enable = true
      },
    },
    充气甲壳: {
      init() {
        this.role.attrib.mode = 1
      },
    },
    超距视界: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    再生护甲: {
      init() {
        this.role.attrib.mode = 1
      },
      listener: {
        'round-end'() {
          this.life = Math.min(100, this.life + 10)
        },
      },
    },
    荆棘外壳: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    护盾封存: {
      init() {
        this.role.attrib.mode = 1
      },
      listener: {
        'round-enter'() {
          this.obtain_resource({
            mineral: 1,
          })
        },
      },
    },
    能量视界: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    暗影追踪: {
      init() {
        this.role.attrib.mode = 1
        this.role.enhance = true
        this.role.progress.cur = -1
      },
    },
    闪现充能: {
      init() {
        this.role.attrib.mode = 2
        this.attrib.alter('free-refresh', 5)
      },
      listener: {
        'round-enter'() {
          this.attrib.alter('free-refresh', 5)
        },
      },
    },
    灵能传送: {
      init() {
        this.role.attrib.mode = 1
        this.role.progress.cur = -1
        this.role.enhance = true
      },
    },
    共鸣之刃: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    超量采集: {
      init() {
        this.role.attrib.mode = 1
        this.role.enable = true
        this.role.progress.cur = 3
      },
    },
    附属钻头: {
      init() {
        this.role.attrib.mode = 2
      },
    },
    机械气罐: {
      init() {
        this.role.attrib.mode = 1
      },
      listener: {
        'card-selled'() {
          this.obtain_resource({
            gas: 1,
          })
        },
      },
    },
    爆裂核心: {
      init() {
        this.role.attrib.mode = 2
        this.role.enable = true
      },
      listener: {
        'round-enter'() {
          this.role.enable = true
        },
      },
    },
    金光普照: {
      init() {
        this.role.attrib.mode = 1
        this.role.enable = false
      },
      listener: {
        'card-entered'({ target }) {
          if (target.level < 6) {
            target.color = 'gold'
            target.obtain_upgrade('金光闪闪')
          }
        },
      },
    },
    限制解除: {
      init() {
        this.role.attrib.mode = 2
        this.role.attrib.used = 0
      },
    },
    光影集结: {
      init() {
        this.role.attrib.mode = 1
      },
      listener: {
        'round-end'() {
          this.all().forEach(ci => {
            ci.regroup(-1)
            ci.regroup(-1)
          })
        },
      },
    },
    能量阵列: {
      init() {
        this.role.attrib.mode = 2
        this.config.ProtossPowerMultiplier = 5
      },
    },
    测试服大主教: {
      init() {
        this.role.attrib.mode = 3
        this.role.enable = true
        this.role.progress.cur = -1
        this.role.progress.max = -1
      },
    },
    虚空意志: {
      init() {
        this.role.attrib.mode = 1
        this.role.enable = true
      },
      listener: {
        'round-enter'() {
          this.role.enable = true
        },
      },
    },
    形体降临: {
      init() {
        this.role.attrib.mode = 2
        this.role.enable = true
      },
      listener: {
        'round-enter'() {
          this.role.enable = true
        },
      },
    },

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

    过量补给: {
      init() {
        this.obtain_resource({
          mineral: this.$ref$Game.lcg.int(20, 1),
        })
      },
    },
    终极发现: {
      init() {
        this.push_discover(
          this.$ref$Game.pool
            .discover(c => c.level === 6, 4)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
      },
    },
    精英学院: {
      listener: {
        'round-end'() {
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
    },
    基因改造: {
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
    净化数据网: {
      init() {
        this.nextAttrib.set('净化数据网', 1)
      },
      listener: {
        'round-start'() {
          if (this.attrib.get('净化数据网')) {
            const ci = this.present[6]?.card
            if (ci && ci.color !== 'gold') {
              ci.color = 'gold'
            }
          }
        },
      },
    },
    机械感染: {
      init() {
        this.config.ZergEggRestrictBiological = false
        this.config.ZergHatchRestrictBiological = false
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
                const u = this.$ref$Game.lcg.one_of(ci.units)
                if (u) {
                  ci.obtain_unit([u])
                }
              })
          }
        },
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
    达拉姆的荣耀: {
      init() {
        this.all().forEach(ci => {
          ci.obtain_unit(rep('阿塔尼斯', 2))
          ci.regroup(-1)
          ci.regroup(-1)
        })
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
            ci.obtain_upgrade(randomUpgrades(this.$ref$Game.lcg, 1)[0])
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
    相位提速: {},
    点石成金: {
      init() {
        this.all()
          .filter(ci => ci.color !== 'gold')
          .forEach(ci => {
            ci.color = 'gold'
            ci.obtain_upgrade('金光闪闪')
          })
      },
    },
  }
  for (const p in res) {
    const impl = res[p as keyof typeof res] as Partial<ProphesyImpl>
    impl.init = impl.init || (() => void 0)
    impl.listener = impl.listener || {}
  }
  return res as Record<ProphesyKey, ProphesyImpl>
}

const t = CreateProphesyTable()

export default t
