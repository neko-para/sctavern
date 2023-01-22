import { canElite, elited } from '@sctavern/data'
import { ProphesyKey } from 'packages/data/src/prophesy'
import { ProphesyImpl } from '../types'

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
          this.stage(res[0].name)
        }
      },
    },
    挖宝奇兵: {
      init() {
        const res = this.$ref$Game.pool.discover(c => c.name === '挖宝奇兵', 1)
        if (res) {
          this.stage(res[0].name)
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
        this.attrib.set('能量扩散', 10)
      },
      listener: {
        'get-refresh-cost'(m) {
          if (this.attrib.get('能量扩散')) {
            if (m.cost > 0) {
              m.cost = 0
              if (m.time === 'real') {
                this.attrib.alter('能量扩散', -1)
              }
            }
          }
        },
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
          console.log(1)
          this.all().forEach(ci => {
            ci.replace(ci.find(canElite), elited)
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
        incubate({ from }) {
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
        this.config.ZergIncubateRestrictBiological = false
      },
    },
    虚空风暴: {
      init() {
        this.persisAttrib.set('虚空风暴', 0)
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
