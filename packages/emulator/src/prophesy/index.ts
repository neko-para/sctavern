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
        while (this.level < 4) {
          this.do_tavern_upgrade()
        }
      },
    },
    能量提速: {},
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
            .discover(c => c.level === 1, 3)
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
            c => c.level === Math.min(6, this.level),
            req,
            false
          )
        )
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
