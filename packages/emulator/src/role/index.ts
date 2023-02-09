import {
  CardData,
  isNormal,
  PackData,
  UnitData,
  UpgradeData,
} from '@sctavern/data'
import type { RoleKey, UnitKey } from '@sctavern/data'
import { CardInstance } from '../card'
import type { RoleImpl } from '../types'
import { mostValueUnit, randomUpgrades, rep } from '../utils'

const hybrid: Record<number, UnitKey> = {
  1: '混合体掠夺者',
  2: '混合体天罚者',
  3: '混合体毁灭者',
  4: '混合体巨兽',
  5: '混合体支配者',
  6: '混合体实验体',
}

export function CreateRoleTable() {
  const res: {
    [r in RoleKey]?: Partial<RoleImpl>
  } = {
    白板: {},
    执政官: {
      init() {
        this.enable = true
      },

      listener: {
        'round-enter'() {
          this.enable = true
        },
      },

      ability(player) {
        if (!this.enable) {
          return
        }
        const left = player.query_selected_present()
        const right = left?.right()
        if (
          !left ||
          !right ||
          left.race === right.race ||
          left.color !== 'normal' ||
          right.color !== 'normal'
        ) {
          return
        }
        const leftDesc = left.descs
        right.name = `${right.name}x${left.name}`
        right.color = 'amber'
        right.belong = 'none'
        right.race =
          right.race === 'N' ? left.race : left.race !== 'N' ? 'N' : right.race
        right.occupy.push(...left.occupy)
        right.seize(left, {
          fake: true,
          withUpgrade: true,
        })
        right.attrib.load(left.attrib, ['任务'])
        leftDesc.forEach(d => right.add_desc(d))
        switch (this.attrib.mode || 0) {
          case 0:
            this.enable = false
            break
          case 1:
            right.units = [...right.units, ...right.units]
            this.enable = false
            break
          case 2:
            player.obtain_resource({
              mineral: 3,
            })
            break
        }
      },
    },
    狂热者: {},
    陆战队员: {
      init() {
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        if (player.mineral < 2) {
          return
        }
        player.obtain_resource({
          mineral: -2,
        })
        if (this.attrib.mode === 2) {
          player.$ref$Game.pool
            .discover(c => c.level === Math.max(1, player.level - 1), 2)
            ?.forEach(c => player.stage(c.name))
        } else {
          player.push_discover(
            player.$ref$Game.pool
              .discover(c => c.level === Math.max(1, player.level - 1), 3)
              ?.map(card => ({
                type: 'card',
                card,
              }))
          )
        }
        if (this.attrib.mode !== 1) {
          this.enable = false
        }
      },
    },
    收割者: {
      init(player) {
        player.config.AlwaysInsert = true
      },
      listener: {
        'get-buy-cost'(m) {
          const card = CardData[m.cardt]
          if (card.attr.insert) {
            m.cost = Math.min(this.attrib.mode === 1 ? 1 : 2, m.cost)
          }
        },
      },
    },
    幽灵: {
      init() {
        this.progress.cur = 1
        this.progress.max = 2
      },
      ability(player) {
        if (this.attrib.mode !== 1) {
          this.progress.cur = 3 - this.progress.cur
        } else {
          if (player.mineral < 2) {
            return
          }
          // TODO: Support upgrade
        }
      },
    },
    感染虫: {
      init() {
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        if (this.attrib.mode !== 1 && ci.race !== 'T') {
          return
        }
        ci.filter(u => u === '反应堆')
        ci.name = `被感染的${ci.name}`
        ci.color = 'amber'
        ci.race = 'Z'
        ci.clear_desc()
        ci.add_desc(this.attrib.mode === 2 ? '被感染的3' : '被感染的')
        ci.fix_upgrade()
        this.enable = false
      },
    },
    SCV: {
      init() {
        this.enable = true
      },
      listener: {
        'round-start'() {
          if (this.attrib.mode === 1) {
            this.progress.cur += 3
          }
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (
          !ci ||
          ci.race !== 'T' ||
          [false, '高级科技实验室'].includes(ci.infr())
        ) {
          return
        }
        ci.switch_infr()
        if (this.attrib.mode === 1) {
          this.progress.cur -= 1
          this.enable = this.progress.cur > 0
        } else {
          this.enable = false
          if (this.attrib.mode === 2) {
            if (player.mineral >= 1) {
              player.obtain_resource({
                mineral: -1,
              })
              this.enable = true
            }
          }
        }
      },
    },
    阿巴瑟: {
      init() {
        this.enable = true
      },
      listener: {
        'round-start'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        if (this.attrib.mode !== 2) {
          if (player.mineral < 2) {
            return
          } else {
            player.obtain_resource({
              mineral: -2,
            })
          }
        }
        if (ci.occupy.length > 0 && this.attrib.mode === 1) {
          player.stage(ci.occupy[0])
        }
        const lv = Math.min(6, ci.level + 1)
        player.destroy(ci)
        player.push_discover(
          player.$ref$Game.pool
            .discover(c => c.level === lv, 3)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
        this.enable = false
      },
    },
    工蜂: {
      listener: {
        'round-enter'({ round }, player) {
          if (round % 2 === 1) {
            player.obtain_resource({
              gas: 1,
            })
          } else {
            player.obtain_resource({
              mineral: 1,
            })
          }
        },
        'tavern-upgraded'({ level }, player) {
          if (this.attrib.mode === 1) {
            player.obtain_resource({
              mineral: level,
              gas: level,
            })
          }
        },
      },
      ability(player) {
        if (this.attrib.mode === 2 && player.gas >= 1) {
          player.obtain_resource({
            mineral: 4,
            gas: -1,
          })
        }
      },
    },
    王虫: {
      init() {
        this.progress.cur = 0
        this.progress.max = 1
      },
      listener: {
        'round-start'() {
          if (this.attrib.mode !== 1) {
            this.progress.cur = 0
          }
        },
        'card-selled'({ target }, player) {
          if (this.attrib.mode !== 1) {
            this.progress.cur += 1
          }
          if (
            this.progress.cur === 1 &&
            this.attrib.mode === 2 &&
            target.occupy.length > 0
          ) {
            player.stage(target.occupy[0])
          }
        },
      },
    },
    蟑螂: {},
    副官: {
      init() {
        this.progress.cur = 1
        this.progress.max = 1
      },
      listener: {
        'round-enter'(m, player) {
          this.progress.cur = 1
          if (this.attrib.mode === 1) {
            player.obtain_resource({
              mineral: player.attrib.get('副官'),
            })
          } else {
            player.obtain_resource({
              mineral: player.attrib.get('副官') ? 1 : 0,
            })
          }
        },
        'round-leave'(m, player) {
          player.nextAttrib.set('副官', player.mineral)
        },
        'get-refresh-cost'(m, player) {
          if (m.cost > 0 && this.progress.cur > 0) {
            m.cost = 0
            if (m.time === 'real') {
              this.progress.cur -= 1
              if (this.attrib.mode === 2) {
                player.obtain_resource({
                  mineral: 1,
                })
                // TODO: 免费刷新应该是专门的机制
              }
            }
          }
        },
      },
    },
    // 下面的PVE都没做
    追猎者: {
      init() {
        this.progress.cur = 0
        this.progress.max = 5
      },
      listener: {
        'round-enter'() {
          if (!this.enhance) {
            this.attrib.first = 1
          }
        },
        refreshed() {
          if (!this.enhance) {
            this.progress.cur += 1
            if (this.progress.cur === this.progress.max) {
              this.progress.cur = -1
              this.enhance = true
            }
          }
        },
        bought(m, player) {
          if (this.enhance || this.attrib.first) {
            this.attrib.first = 0
            player.do_refresh()
          }
        },
      },
    },
    使徒: {
      init() {
        this.progress.max = 2
      },
      listener: {
        'round-enter'() {
          this.progress.cur = 0
        },
        bought(m) {
          if (m.action !== 'combine') {
            this.progress.cur += 1
            this.enhance = this.progress.cur === this.progress.max
          }
        },
        'get-buy-cost'(m) {
          if (m.action === 'combine') {
            return
          }
          if (this.progress.cur === this.progress.max && m.cost > 1) {
            m.cost = 1
          }
        },
      },
    },
    矿骡: {
      init() {
        this.attrib.used = 0
      },
      listener: {
        'round-enter'(m, player) {
          if (this.attrib.used) {
            player.mineral -= player.mineral_max - 2
            this.attrib.used = 0
          } else {
            this.enable = true
          }
        },
        $ability(m, player) {
          if (!this.enable || player.mineral >= player.mineral_max) {
            return
          }
          player.obtain_resource({
            mineral: player.mineral_max - player.mineral,
          })
          this.enable = false
          this.attrib.used = 1
        },
      },
    },
    斯台特曼: {
      listener: {
        'round-enter'(m, player) {
          if (m.round > 1) {
            player.obtain_resource({
              gas: -1,
            })
          }
        },
        'tavern-upgraded'(m, player) {
          player.obtain_resource({
            gas: 1,
          })
        },
        'card-entered'({ target }, player) {
          player.push_discover(
            randomUpgrades(player.$ref$Game.lcg, 3)
              .map(u => UpgradeData[u])
              .map(upgrade => ({
                type: 'upgrade',
                upgrade,
              })),
            {
              target: target.index(),
            }
          )
        },
      },
    },
    雷诺: {
      init() {
        this.enable = true
      },
      listener: {
        $ability(m, player) {
          if (!this.enable) {
            return
          }
          const ci = player.query_selected_present()
          if (!ci || ci.color === 'gold') {
            return
          }
          ci.color = 'gold'
          ci.obtain_upgrade('金光闪闪')
          this.enable = false
        },
      },
    },
    阿塔尼斯: {
      init() {
        this.progress.cur = 0
        this.progress.max = 9
      },
      listener: {
        'card-entered'({ target }, player) {
          if (this.progress.cur < this.progress.max && target.race === 'P') {
            this.progress.cur += 1
            if (this.progress.cur === this.progress.max) {
              this.progress.cur = -1
              target.name = `大主教的卫队`
              target.level = 7
              target.color = 'amber'
              target.load_desc(CardData['阿塔尼斯'])
              target.load_unit(CardData['阿塔尼斯'])
            }
          }
        },
      },
    },
    科学球: {
      init() {
        this.progress.max = 2
        this.progress.cur = 2
        this.enable = true
        this.record = {}
      },
      listener: {
        'card-entered'({ target }, player) {
          const { unit } = mostValueUnit(target.units)
          const r = this.record || {}
          if (unit) {
            r[unit] = (r[unit] || 0) + 1
          }
        },
        $ability(m, player) {
          if (!this.enable) {
            return
          }
          if (player.gas < 1 || !player.can_enter('观察样本')) {
            return
          }
          const ci = player.enter('观察样本')
          if (ci) {
            const r = this.record || {}
            ci.obtain_unit(
              Object.keys(r)
                .map(k => rep(k as UnitKey, r[k]))
                .flat()
            )
            player.obtain_resource({
              gas: -1,
            })
            this.progress.cur -= 1
            this.enable = this.progress.cur > 0
          }
        },
      },
    },
    母舰核心: {
      init() {
        this.progress.cur = 0
        this.progress.max = 2
      },
      listener: {
        'round-enter'({ round }, player) {
          if (round === 1) {
            player.obtain_resource({
              mineral: -3,
            })
            player.enter('母舰核心')
          }
        },
        'card-combined'(m, player) {
          const cis = player.locate(['母舰核心', '母舰'])
          if (!cis.length) {
            return
          }
          cis[0].obtain_unit(rep('虚空辉光舰', player.level))
          if (this.progress.cur < this.progress.max) {
            this.progress.cur += 1
            if (this.progress.cur === this.progress.max) {
              this.progress.cur = -1
              this.enhance = true
              cis[0].name = '母舰'
              cis[0].replace(cis[0].find('母舰核心', 1), '母舰')
            }
          }
        },
      },
    },
    行星要塞: {
      listener: {
        'round-enter'() {
          this.enable = true
        },
        'card-entered'({ target }, player) {
          if (target.attrib.get('structure')) {
            target.obtain_unit(rep('自动机炮', player.level))
          }
        },
        $ability(m, player) {
          if (!this.enable) {
            return
          }
          if (player.mineral < 3) {
            return
          }
          player.obtain_resource({
            mineral: -3,
          })
          player.push_discover(
            player.$ref$Game.lcg
              .shuffle(PackData.行星要塞衍生.map(c => CardData[c]))
              .slice(0, 3)
              .map(card => ({
                type: 'card',
                card,
              }))
          )
          this.enable = false
        },
      },
    },
    拟态虫: {
      init() {
        this.attrib.pos = -1
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
        $ability(m, player) {
          if (!this.enable) {
            return
          }
          const ci = player.query_selected_present()
          if (!ci || player.mineral < 2 || ci.index() === this.attrib.pos) {
            return
          }
          const c = player.$ref$Game.pool.discover(
            c => c.level === player.level,
            1
          )
          if (!c) {
            return
          }
          ci.load_unit(c[0], false, u => isNormal(UnitData[u]))
          this.attrib.pos = ci.index()
          player.$ref$Game.pool.drop(c)
          player.obtain_resource({
            mineral: -2,
          })
          this.enable = false
        },
      },
    },
    探机: {
      listener: {
        'card-entered'({ target }) {
          target.obtain_unit(['水晶塔'])
        },
        'round-enter'() {
          this.enable = true
        },
        $ability(m, player) {
          if (!this.enable) {
            return
          }
          const ci = player.query_selected_present()
          if (!ci || player.mineral < 1 || ci.find('水晶塔').length < 1) {
            return
          }
          ci.replace(ci.find('水晶塔', 1), '虚空水晶塔')
          player.obtain_resource({
            mineral: -1,
          })
          this.enable = false
        },
      },
    },
    泰凯斯: {
      listener: {
        'round-enter'({ round }, player) {
          if (round === 1) {
            player.obtain_resource({
              mineral: -3,
            })
            const ci = player.enter('不法之徒')
            ci?.add_desc('不法之徒0')
          }
        },
      },
    },
    诺娃: {
      listener: {
        'round-enter'(m, player) {
          player.push_discover(
            player.$ref$Game.lcg
              .shuffle(PackData.辅助卡.map(c => CardData[c]))
              .slice(0, 2)
              .map(card => ({
                type: 'card',
                card,
              }))
          )
        },
      },
    },
    思旺: {
      listener: {
        $ability(m, player) {
          const ci = player.query_selected_present()
          if (!ci) {
            return
          }
          if (player.locate('机械工厂').length === 0) {
            if (!player.enter('机械工厂')) {
              return
            }
          }
          const mechs = player.locate('机械工厂')
          if (!mechs.length) {
            return
          }
          mechs[0].obtain_unit(
            rep('零件', ci.filter(u => !!UnitData[u].tag.mechanical).length)
          )
        },
      },
    },
    跳虫: {
      init(player) {
        player.config.ZergEggCard = '虫卵(跳虫)'
      },
      listener: {
        'tavern-upgraded'({ level }, player) {
          if (level === 4) {
            player.config.ZergEggCount = 2
          }
        },
      },
    },
    混合体: {
      listener: {
        'round-leave'(m, player) {
          for (let i = 1; i <= 6; i++) {
            const ps = player.all_of('P').filter(c => c.level === i)
            const zs = player.all_of('Z').filter(c => c.level === i)
            while (ps.length > 0 && zs.length > 0) {
              player.$ref$Game.lcg
                .one_of([
                  ps.shift() as CardInstance,
                  zs.shift() as CardInstance,
                ])
                ?.obtain_unit([hybrid[i]])
            }
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        switch (this.attrib.mode) {
          case 1:
            ci.set_void()
            ci.obtain_upgrade('虚空能量')
            break
          case 2:
            ci.obtain_unit([hybrid[player.level]])
            break
        }
        this.enable = false
      },
    },
  }
  for (const r in res) {
    const impl = res[r as keyof typeof res] as Partial<RoleImpl>
    impl.init = impl.init || (() => void 0)
    impl.listener = impl.listener || {}
    impl.ability = impl.ability || (() => void 0)
  }
  return res as Record<RoleKey, RoleImpl>
}

const t = CreateRoleTable()

export default t
