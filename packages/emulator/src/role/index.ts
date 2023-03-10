import {
  AllUpgrade,
  canElite,
  CardData,
  elited,
  ExtPack,
  isNormal,
  PackData,
  royalized,
  UnitData,
  UpgradeData,
  ArchonUpgrade,
} from '@sctavern/data'
import type { CardKey, PackKey } from '@sctavern/data'
import type { RoleKey, UnitKey } from '@sctavern/data'
import type { CardInstance } from '../card'
import type { DiscoverItem, RoleImpl } from '../types'
import { mostValueUnit, notNull, randomUpgrades, rep } from '../utils'
import type { LCG } from '../game'

const ghostUpgrade: Record<
  string,
  {
    desc: string
    multi: boolean
  }
> = {
  传送: {
    desc: '所有幽灵能使用紧急传送并且增加30点生命值上限',
    multi: false,
  },
  穿甲弹: {
    desc: '所有幽灵能发射穿甲弹并且增加30点生命值上限',
    multi: false,
  },
  潜能: {
    desc: '所有幽灵生命值减少10%, 能够使用潜能',
    multi: false,
  },
  病毒弹: {
    desc: '所有幽灵能使用病毒弹并且增加30点生命上限',
    multi: false,
  },
  攻速: {
    desc: '所有幽灵生命值减少10%, 攻速翻倍',
    multi: false,
  },
  EMP: {
    desc: '所有幽灵生命值减少10%, 能发射EMP弹',
    multi: false,
  },
  近战: {
    desc: '所有幽灵武器变为近战并且增加70%生命值',
    multi: false,
  },
  强化剂: {
    desc: '所有幽灵能使用超级强化剂并且增加30点生命值上限',
    multi: false,
  },
  生命: {
    desc: '所有幽灵增加80点生命值上限',
    multi: true,
  },
  射程: {
    desc: '所有幽灵武器射程+2',
    multi: true,
  },
}

const hybrid: Record<number, UnitKey> = {
  1: '混合体掠夺者',
  2: '混合体天罚者',
  3: '混合体毁灭者',
  4: '混合体巨兽',
  5: '混合体支配者',
  6: '混合体实验体',
}

const evolution: Record<
  '原始蟑螂' | '原始刺蛇' | '原始异龙' | '暴掠龙' | '原始雷兽' | '德哈卡分身',
  UnitKey
> = {
  原始蟑螂: '原始点火虫',
  原始刺蛇: '原始穿刺者',
  原始异龙: '原始守卫',
  暴掠龙: '毒裂兽',
  原始雷兽: '原始暴龙兽',
  德哈卡分身: '德哈卡',
}

interface ZergMutation {
  from: UnitKey
  to: UnitKey
  count: number
}

function genMutations(lcg: LCG, maxi: number): ZergMutation[] {
  function genMutation(lcg: LCG, maxi: number): ZergMutation {
    function genNormal(lcg: LCG): UnitKey {
      const v = lcg.int(100, 21)
      if (v <= 30) {
        return '守卫'
      } else if (v <= 35) {
        return '破坏者'
      } else if (v <= 50) {
        return '跳虫'
      } else if (v <= 60) {
        return '蟑螂'
      } else if (v <= 70) {
        return '异龙'
      } else if (v <= 80) {
        return '爆虫'
      } else if (v <= 90) {
        return '刺蛇'
      } else {
        return '虫后'
      }
    }

    function genMedium(lcg: LCG): UnitKey {
      const v = lcg.int(30, 1)
      if (v <= 5) {
        return '雷兽'
      } else if (v <= 10) {
        return '潜伏者'
      } else if (v <= 20) {
        return '异龙(精英)'
      } else {
        return '刺蛇(精英)'
      }
    }

    function genGreat(lcg: LCG): UnitKey {
      const v = lcg.int(10, 1)
      if (v <= 1) {
        return '利维坦'
      } else if (v <= 2) {
        return '王兽'
      } else if (v <= 4) {
        return '莽兽'
      } else if (v <= 6) {
        return '飞蛇'
      } else if (v <= 8) {
        return '感染者'
      } else {
        return '巢虫领主'
      }
    }

    const k = lcg.int(maxi, 1)
    const type = k <= 5 ? 3 : k <= 20 ? 2 : 1
    return {
      from: genNormal(lcg),
      to:
        type === 3
          ? genGreat(lcg)
          : type === 2
          ? genMedium(lcg)
          : genNormal(lcg),
      count: type === 3 ? 1 : type === 2 ? lcg.int(2, 1) : lcg.int(5, 2),
    }
  }

  const mut: ZergMutation[] = []
  while (mut.length < 3) {
    const m = genMutation(lcg, maxi)
    if (mut.findIndex(x => x.from === m.from && x.to === m.to) !== -1) {
      continue
    }
    mut.push(m)
  }
  return mut
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
        switch (this.attrib.mode ?? 0) {
          case 0:
            this.enable = false
            break
          case 1:
            player.push_discover(
              ArchonUpgrade.map(upgrade => ({
                type: 'upgrade',
                upgrade: UpgradeData[upgrade],
              })),
              {
                target: right.index(),
              }
            )
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
        'get-buy-cost'(m) {
          if (this.attrib.mode === 2) {
            const r = this.record as Record<CardKey, number>
            if (r[m.cardt]) {
              m.cost = 1
            }
          }
        },
        refreshed(m, player) {
          if (this.attrib.mode === 2) {
            const r = this.record as Record<CardKey, number>
            player.store.forEach(s => {
              if (s) {
                s.special = !!r[s.card]
              }
            })
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        if (this.attrib.mode === 2) {
          const r = this.record as Record<CardKey, number>
          const card = player.query_selected_store()
          if (!card || r[card]) {
            return
          }
          r[card] = 1
          player.store[player.selected.place] = null
          player.obtain_card(card)
          player.store.forEach(s => {
            if (s) {
              s.special = !!r[s.card]
            }
          })
          this.enable = false
        } else {
          if (player.mineral < 2) {
            return
          }
          player.obtain_resource({
            mineral: -2,
          })
          player.push_discover(
            player.$ref$Game.pool
              .discover(c => c.level === Math.max(1, player.level - 1), 3)
              ?.map(card => ({
                type: 'card',
                card,
              }))
          )
          if (this.attrib.mode !== 1) {
            this.enable = false
          }
        }
      },
      record() {
        if (this.attrib.mode === 2) {
          const record = this.record as Record<string, number>
          return Object.keys(record)
        } else {
          return []
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
        this.record = {}
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
        'discover-finish'({ ctx }) {
          if (ctx.id !== this.attrib.discoverId) {
            return
          }
          delete this.attrib.discoverId
          const ups = this.record as Record<string, number>
          const cho = (
            ctx.item[ctx.choice] as DiscoverItem & { type: 'custom' }
          ).str
          ups[cho] = (ups[cho] ?? 0) + 1
        },
        'get-unit-value'(m) {
          if (m.unit === '幽灵') {
            const ups = this.record as Record<string, number>
            const cnt = Object.keys(ups)
              .map(u => ups[u])
              .reduce((a, b) => a + b, 0)
            m.value += 70 * cnt
          }
        },
      },
      ability(player) {
        if (this.attrib.mode !== 1) {
          this.progress.cur = 3 - this.progress.cur
        } else {
          if (player.mineral < 2) {
            return
          }
          player.obtain_resource({
            mineral: -2,
          })
          const ups = this.record as Record<string, number>
          const rest = Object.keys(ghostUpgrade).filter(
            u => ghostUpgrade[u].multi || !ups[u]
          )
          this.attrib.discoverId = player.push_discover(
            player.$ref$Game.lcg
              .shuffle(rest)
              .slice(0, 3)
              .map(upgrade => ({
                type: 'custom',
                str: upgrade,
              })),
            {
              fake: true,
            }
          )
          this.enable = false
        }
      },
      record() {
        const ups = this.record as Record<string, number>
        return Object.keys(ups).map(upgrade => `${upgrade}: ${ups[upgrade]}`)
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
        'discover-finish'({ ctx }, player) {
          if (ctx.id !== this.attrib.discoverId) {
            return
          }
          const ci = player.query_selected_present()
          if (!ci) {
            // ?
            return
          }
          ci.clear_desc()
          ci.load_desc(
            (ctx.item[ctx.choice] as DiscoverItem & { type: 'card' }).card,
            true
          )
          ci.post({
            msg: 'post-enter',
          })
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        switch (this.attrib.mode ?? 0) {
          case 0: {
            const ci = player.query_selected_present()
            if (!ci) {
              return
            }
            if (player.mineral < 2) {
              return
            }
            player.obtain_resource({
              mineral: -2,
            })
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
            break
          }
          case 1: {
            const ci = player.query_selected_present()
            if (!ci) {
              return
            }
            if (player.mineral < 1) {
              return
            }
            player.obtain_resource({
              mineral: -1,
            })
            const lv = Math.min(6, ci.level + 1)
            this.attrib.discoverId = player.push_discover(
              player.$ref$Game.pool
                .discover(c => c.level === lv, 3)
                ?.map(card => ({
                  type: 'card',
                  card,
                })),
              {
                fake: true,
              }
            )
            this.enable = false
            break
          }
          case 2: {
            if (this.progress.cur < 3) {
              return
            }
            const ci = player.query_selected_present()
            if (ci) {
              if (ci.upgrades.length < ci.config.MaxUpgrade) {
                ci.obtain_upgrade('生物突变')
                this.progress.cur -= 3
              }
            } else {
              const si = player.query_selected_store()
              if (si) {
                const packs: PackKey[] = ['核心', ...ExtPack]
                const cards = packs
                  .map(p => PackData[p])
                  .flat()
                  .map(c => CardData[c])
                  .filter(c => c.level === 6)
                const card = player.$ref$Game.lcg.one_of(cards)
                if (card) {
                  player.store[player.selected.place] = {
                    card: card.name,
                    special: false,
                  }
                  this.progress.cur -= 3
                }
              }
            }
            break
          }
        }
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
          if (this.attrib.mode === 1) {
            player.$ref$Game.player.forEach(p => {
              if (p && p.life > 0) {
                if (round % 2 === 1) {
                  p.obtain_resource({
                    gas: 1,
                  })
                } else {
                  p.obtain_resource({
                    mineral: 1,
                  })
                }
              }
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
            player.obtain_card(target.occupy[0])
          }
        },
      },
    },
    蟑螂: {},
    副官: {
      init() {},
      listener: {
        'recalc-life-loss'(m, player) {
          if (this.attrib.mode === 1 && player.attrib.get('副官') > 0) {
            m.loss = Math.max(0, m.loss - 20)
          }
        },
        'round-enter'(m, player) {
          player.attrib.alter('free-refresh', 1)
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
        refreshed(m, player) {
          if (m.cost === 0 && this.attrib.mode === 2) {
            if (player.mineral < player.mineral_max) {
              player.obtain_resource({
                mineral: 1,
              })
            }
          }
        },
      },
    },
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
        'card-selled'(m, player) {
          if (this.attrib.mode === 1) {
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
          if (!this.attrib.mode) {
            this.progress.cur = 0
          }
        },
        bought(m) {
          if (!this.attrib.mode) {
            if (m.action !== 'combine') {
              this.progress.cur += 1
              this.enhance = this.progress.cur === this.progress.max
            }
          }
        },
        'get-buy-cost'(m) {
          if (!this.attrib.mode) {
            if (m.action === 'combine') {
              return
            }
            if (this.progress.cur === this.progress.max) {
              m.cost = Math.min(m.cost, 1)
            }
          }
        },
      },
      ability(player) {
        if (this.attrib.mode === 1) {
          player.store.filter(notNull).forEach(s => {
            player.obtain_card(s.card)
          })
          this.enable = false
        }
      },
      record() {
        if (this.attrib.mode === 2) {
          return [(this.record as CardKey) ?? '']
        } else {
          return []
        }
      },
    },
    矿骡: {
      init() {
        this.attrib.used = 0
      },
      listener: {
        'round-enter'(m, player) {
          if (!this.attrib.mode) {
            if (this.attrib.used) {
              player.mineral -= player.mineral_max - 2
              this.attrib.used = 0
            } else {
              this.enable = true
            }
          } else {
            this.progress.cur += 3
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        if (this.attrib.mode) {
          return
        }
        if (player.mineral >= player.mineral_max) {
          return
        }
        player.obtain_resource({
          mineral: player.mineral_max - player.mineral,
        })
        this.enable = false
        this.attrib.used = 1
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
      ability(player) {
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        const ups = ci.upgrades
        const ar = ci.around()
        player.destroy(ci)
        player.obtain_resource({
          mineral: 3,
        })
        ar.forEach(c => {
          ups.forEach(u => {
            c.obtain_upgrade(u)
          })
        })
      },
    },
    雷诺: {
      init() {
        this.enable = true
      },
      listener: {
        'round-enter'() {
          if (this.attrib.mode === 2) {
            this.enable = !this.attrib.used
            this.attrib.used = 0
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
        if (this.attrib.mode !== 2 && ci.level >= 6) {
          return
        }
        ci.gold = true
        ci.obtain_upgrade('金光闪闪')
        this.enable = false
        this.attrib.used = 1
      },
    },
    阿塔尼斯: {
      init() {
        this.progress.cur = 0
        this.progress.max = 9
      },
      listener: {
        'round-enter'() {
          if (this.attrib.mode === 1) {
            this.enable = true
          }
        },
        'card-entered'({ target }, player) {
          if (this.attrib.mode !== 1) {
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
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci || ci.race !== 'P') {
          return
        }
        const { unit } = mostValueUnit(
          ci.units.filter(u => isNormal(UnitData[u]))
        )
        if (!unit) {
          return
        }
        ci.clear_desc()
        ci.add_desc(`集结:${ci.level}:0:折跃:${unit}:1:2`)
        ci.fix_upgrade()
        ci.obtain_unit(rep('水晶塔', 2))
        this.enable = false
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
          const r = this.record as Record<UnitKey, number>
          if (unit) {
            if (this.attrib.mode !== 1) {
              r[unit] = (r[unit] ?? 0) + 1
            } else {
              const cis = player.locate('科学观察')
              if (cis.length > 0) {
                cis[0].obtain_unit([unit])
                this.progress.cur += 1
              }
            }
          }
        },
        'card-selled'({ target }, player) {
          const { unit } = mostValueUnit(target.units)
          if (unit) {
            if (this.attrib.mode === 1) {
              const cis = player.locate('科学观察')
              if (cis.length > 0) {
                cis[0].obtain_unit([unit])
                this.progress.cur += 1
              }
            }
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        if (this.attrib.mode === 1) {
          return
        }
        if (this.attrib.mode === 2) {
          const ci = player.query_selected_present()
          if (ci) {
            const r = this.record as Record<UnitKey, number>
            ci.obtain_unit(
              (Object.keys(r) as UnitKey[]).map(k => rep(k, r[k])).flat()
            )
          }
        } else {
          if (player.gas < 1 || !player.can_enter('观察样本')) {
            return
          }
          const ci = player.enter('观察样本')
          if (ci) {
            const r = this.record as Record<UnitKey, number>
            ci.obtain_unit(
              (Object.keys(r) as UnitKey[]).map(k => rep(k, r[k])).flat()
            )
            player.obtain_resource({
              gas: -1,
            })
          }
        }
        this.progress.cur -= 1
        this.enable = this.progress.cur > 0
      },
      record() {
        if (this.attrib.mode === 1) {
          return []
        } else {
          const r = this.record as Record<UnitKey, number>
          return (Object.keys(r) as UnitKey[]).map(k => `${k}: ${r[k]}`)
        }
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
            player.enter(
              player.$ref$Game.config.Pve ? '母舰核心(PVE)' : '母舰核心'
            )
          }
        },
        'card-combined'(m, player) {
          const cis = player.locate(['母舰核心', '母舰核心(PVE)'])
          if (!cis.length) {
            return
          }
          cis.forEach(ci => {
            if (ci.gold && player.$ref$Game.config.Pve) {
              ci.obtain_unit([
                ...rep('侦察机(精英)', player.level),
                ...rep('虚空辉光舰(精英)', player.level),
                ...rep('风暴战舰(精英)', player.level),
              ])
            } else {
              ci.obtain_unit(rep('虚空辉光舰', player.level))
            }
          })
          if (this.progress.cur < this.progress.max) {
            this.progress.cur += 1
            if (this.progress.cur === this.progress.max) {
              cis.forEach(ci => {
                ci.replace(ci.find('母舰核心', 1), '母舰')
              })
            }
          }
        },
        'get-buy-cost'(m, player) {
          if (player.attrib.get('母舰核心:核心超载')) {
            m.cost = Math.min(2, m.cost)
          }
        },
        bought(m, player) {
          if (player.attrib.get('母舰核心:核心超载')) {
            player.store[m.place] = {
              card: m.cardt,
              special: false,
            }
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        player.attrib.set('母舰核心:核心超载', 1)
        this.enable = false
      },
    },
    行星要塞: {
      listener: {
        'round-enter'() {
          this.enable = true
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        if (this.attrib.mode !== 2) {
          if (player.mineral < 3) {
            return
          }
          player.obtain_resource({
            mineral: -3,
          })
        }
        player.push_discover(
          player.$ref$Game.lcg
            .shuffle(PackData.行星要塞衍生.map(c => CardData[c]))
            .slice(0, this.attrib.mode === 2 ? 5 : 3)
            .map(card => ({
              type: 'card',
              card,
            }))
        )
        if (this.attrib.mode !== 1) {
          this.enable = false
        }
      },
    },
    拟态虫: {
      init() {
        this.attrib.pos = -1
      },
      listener: {
        'round-enter'() {
          if (this.attrib.mode !== 2) {
            this.enable = true
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        switch (this.attrib.mode ?? 0) {
          case 0:
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
            break
          case 1:
            player.obtain_card('拟态雏虫', false)
            break
        }
        this.enable = false
      },
    },
    探机: {
      listener: {
        'card-entered'({ target }) {
          target.obtain_unit([this.attrib.mode === 1 ? '虚空水晶塔' : '水晶塔'])
        },
        'round-enter'() {
          this.enable = true
        },
      },
      ability(player) {
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
              .shuffle(
                (this.attrib.mode === 1
                  ? PackData['辅助卡+']
                  : PackData.辅助卡
                ).map(c => CardData[c])
              )
              .slice(0, this.attrib.mode === 2 ? 4 : 2)
              .map(card => ({
                type: 'card',
                card,
              }))
          )
          if (this.attrib.mode === 2) {
            this.enable = true
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        player.push_discover(
          player.$ref$Game.lcg
            .shuffle(PackData.辅助卡.map(c => CardData[c]))
            .slice(0, 4)
            .map(card => ({
              type: 'card',
              card,
            }))
        )
        this.enable = false
      },
    },
    思旺: {
      init() {
        this.enable = true
      },
      ability(player) {
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        if (ci.find(u => !!UnitData[u].tag.mechanical).length === 0) {
          return
        }
        if (player.locate('机械工厂').length === 0) {
          const ci = player.enter('机械工厂')
          if (!ci) {
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
    // 下面的PVE都没做
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
    蒙斯克: {
      init() {
        this.progress.cur = 12
        this.enable = true
      },
      listener: {
        'round-enter'() {
          if (this.progress.cur > 0) {
            this.progress.cur -= 3
          }
        },
      },
      ability(player) {
        if (player.mineral < this.progress.cur) {
          return
        }
        player.all().forEach(ci => {
          ci.replace(
            [
              ...ci.find('战列巡航舰', 1),
              ...ci.find('雷神', 1),
              ...ci.find('攻城坦克', 1),
              ...ci.find(['维京战机', '维京战机<机甲>'], 1),
            ].slice(0, 1),
            royalized
          )
        })
        player.obtain_resource({
          mineral: -this.progress.cur,
        })
        this.progress.cur = 9
      },
    },
    雷神: {
      init() {
        this.enable = true
      },
      listener: {
        'tavern-upgraded'() {
          this.enable = true
        },
        'discover-finish'({ ctx }, player) {
          if (ctx.id !== this.attrib.discoverId) {
            return
          }
          delete this.attrib.discoverId
          if (ctx.choice === -1) {
            return
          }
          const ci = player.present[this.attrib.target]?.card
          if (!ci) {
            return
          }
          const item = ctx.item[ctx.choice]
          if (item.type === 'card') {
            ci.clear_desc()
            ci.load_desc(item.card, true)
            ci.post({
              msg: 'post-enter',
            })
            this.enable = false
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci || ci.level >= 6) {
          return
        }
        this.attrib.target = ci.index()
        const choice = PackData.核心
          .map(c => CardData[c])
          .filter(c => c.race === ci.race && c.level === ci.level)
        this.attrib.discoverId = player.push_discover(
          choice
            .filter(c => c.name !== ci.name)
            .map(card => ({
              type: 'card',
              card,
            })),
          {
            extra: '取消',
            fake: true,
          }
        )
      },
    },
    机械哨兵: {
      init() {
        this.progress.max = 3
        this.progress.cur = 3
      },
      listener: {
        'round-enter'() {
          this.enable = this.progress.cur > 0
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (
          !ci ||
          ci.level >= 5 ||
          ci.occupy.length === 0 ||
          player.mineral < 4
        ) {
          return
        }
        player.obtain_resource({
          mineral: -4,
        })
        player.obtain_card(ci.occupy[0])
        this.progress.cur -= 1
        this.enable = false
      },
    },
    异龙: {
      init() {
        this.enable = true
      },
      listener: {
        'tavern-upgraded'() {
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
        this.enable = false
        player.push_discover(
          player.$ref$Game.pool
            .discover(c => c.race === 'Z' && c.level <= player.level, 4, false)
            ?.map(card => ({
              type: 'card',
              card,
            }))
        )
      },
    },
    医疗兵: {
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
        const us = ci.units
          .map(u => UnitData[u])
          .filter(u => isNormal(u) && u.tag.biological && !u.tag.heroic)
        player.destroy(ci)
        const cs = player.all()
        for (const [i, c] of cs.entries()) {
          c.obtain_unit(
            us.filter((u, p) => p % cs.length === i).map(u => u.name)
          )
        }
        player.obtain_resource({
          mineral: 1,
        })
        this.enable = false
      },
    },
    分裂池: {
      init(player) {
        player.config.AlwaysHatch = true
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
        ci.hatch(-1)
        this.enable = false
      },
    },
    响尾蛇: {
      init() {
        this.progress.cur = 0
        this.progress.max = 3
      },
      listener: {
        'tavern-upgraded'() {
          if (this.progress.cur === 3) {
            this.progress.cur = 0
          }
        },
        'store-refreshed'(m, player) {
          if (this.progress.cur < this.progress.max) {
            this.progress.cur += 1
            if (this.progress.cur === this.progress.max) {
              const packs: PackKey[] = ['核心', ...ExtPack] // 能找特典吗
              const cards = packs
                .map(p => PackData[p])
                .flat()
                .map(c => CardData[c])
                .filter(c => c.level === player.level)
              player.$ref$Game.lcg.shuffle(cards)
              player.push_discover(
                cards.slice(0, player.level === 6 ? 3 : 4).map(card => ({
                  type: 'card',
                  card,
                })),
                {
                  nodrop: true,
                }
              )
            }
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
    德哈卡: {
      init() {
        this.progress.cur = 0
        this.enable = true
      },
      listener: {
        'round-enter'(m, player) {
          this.progress.cur += player.gas
        },
      },
      ability(player) {
        const ci = player.query_selected_present()
        if (!ci) {
          return
        }
        if (ci.belong === 'primal') {
          if (this.progress.cur < 1) {
            return
          }
          const us = ci.find(u => u in evolution)
          const cho = player.$ref$Game.lcg.one_of(us)
          if (typeof cho === 'number') {
            ci.replace([cho], u => evolution[u as keyof typeof evolution])
            this.progress.cur -= 1
          }
        } else {
          if (this.progress.cur < 6) {
            return
          }
          ci.clear_desc()
          ci.name = '原始刺蛇'
          ci.level = 2
          ci.race = 'N'
          ci.belong = 'primal'
          if (ci.color !== 'normal') {
            ci.color = 'normal'
            ci.gold = true
          }
          ci.load_desc(CardData.原始刺蛇, true)
          this.progress.cur -= 6
        }
      },
    },
    星港: {
      listener: {
        'round-enter'(m, player) {
          // Or round-start ?
          player.all().forEach(ci => {
            ci.replace(
              ci.find(
                u => isNormal(UnitData[u]) && !!UnitData[u].tag.air,
                player.level - 1
              ),
              u => (UnitData[u].tag.heroic ? '战列巡航舰' : '怨灵战机')
            )
          })
        },
        'round-leave'(m, player) {
          player.all().forEach(ci => {
            const { unit } = mostValueUnit(
              ci.units.filter(
                u => !UnitData[u].tag.heroic && UnitData[u].tag.air
              )
            )
            if (unit) {
              ci.replace(ci.find('怨灵战机', 1), unit)
            }
          })
        },
      },
    },
    进化腔: {
      listener: {
        'round-enter'({ round }, player) {
          if (round === 1) {
            return
          }
          this.attrib.rate = 100
          const mut = genMutations(player.$ref$Game.lcg, this.attrib.rate)
          this.attrib.discoverId = player.push_discover(
            mut.map(zm => ({
              type: 'custom',
              str: `${zm.count}${zm.from} -> ${zm.count}${zm.to}`,
            })),
            {
              extra: player.mineral >= 1 ? '刷新' : undefined,
              fake: true,
              data: mut,
            }
          )
        },
        'discover-finish'({ ctx }, player) {
          if (ctx.id !== this.attrib.discoverId) {
            return
          }
          const mut = ctx.data as ZergMutation[]
          delete this.attrib.discoverId
          if (ctx.choice === -1) {
            if (player.mineral < 1) {
              this.attrib.discoverId = player.push_discover(
                mut.map(zm => ({
                  type: 'custom',
                  str: `${zm.count}${zm.from} -> ${zm.count}${zm.to}`,
                })),
                {
                  extra: player.mineral >= 1 ? '刷新' : undefined,
                  fake: true,
                  data: mut,
                }
              )
              return
            }
            player.obtain_resource({
              mineral: -1,
            })
            this.attrib.rate = Math.max(0, this.attrib.rate - 5)
            const newmut = genMutations(player.$ref$Game.lcg, this.attrib.rate)
            this.attrib.discoverId = player.push_discover(
              newmut.map(zm => ({
                type: 'custom',
                str: `${zm.count}${zm.from} -> ${zm.count}${zm.to}`,
              })),
              {
                extra: player.mineral >= 1 ? '刷新' : undefined,
                fake: true,
                data: newmut,
              }
            )
          } else {
            const zm = mut[ctx.choice]
            const from = [zm.from]
            const to = [zm.to, zm.to]
            if (canElite(player.$ref$Game.config.ActiveUnit, from[0])) {
              from.push(elited(from[0]))
            }
            if (canElite(player.$ref$Game.config.ActiveUnit, to[0])) {
              to[1] = elited(to[0])
            }
            player.all_of('Z').forEach(ci => {
              ci.replace(ci.find(from, zm.count), u =>
                u === from[0] ? to[0] : to[1]
              )
            })
          }
        },
      },
    },
    锻炉: {
      init() {
        this.progress.cur = 0
      },
      listener: {
        'card-selled'({ target }) {
          if (target.name !== '虫卵' && target.name !== '被感染的虫卵') {
            this.progress.cur = Math.min(50, this.progress.cur + 2)
          }
        },
      },
    },
    扎加拉: {
      listener: {
        'round-enter'(m, player) {
          if (player.all().length >= 6) {
            const maxv = Math.max(...player.all().map(c => c.value()))
            player.destroy(player.all().filter(c => c.value() === maxv)[0])
            const minv = Math.min(...player.all().map(c => c.value()))
            player.destroy(player.all().filter(c => c.value() === minv)[0])
            player.obtain_resource({
              mineral: 11,
            })
          }
        },
      },
    },
    大力神: {
      init() {
        this.record = {}
      },
      listener: {
        'round-enter'({ round }, player) {
          this.enable = true
          switch (round) {
            case 1:
              this.attrib.dis5 = player.push_discover(
                player.$ref$Game.pool
                  .discover(c => c.level === 5, 3)
                  ?.map(card => ({
                    type: 'card',
                    card,
                  })),
                {
                  fake: true,
                  dropall: true,
                }
              )
              this.attrib.dis3 = player.push_discover(
                player.$ref$Game.pool
                  .discover(c => c.level === 3, 3)
                  ?.map(card => ({
                    type: 'card',
                    card,
                  })),
                {
                  fake: true,
                  dropall: true,
                }
              )
              break
          }
        },
        'tavern-upgraded'({ level }, player) {
          const record = this.record as Record<3 | 5, CardKey>
          switch (level) {
            case 2:
            case 4:
              player.upgrade_cost += 1
              break
            case 3:
              player.obtain_card(record[3])
              break
            case 5:
              player.obtain_card(record[5])
              break
          }
        },
        'discover-finish'({ ctx }) {
          const record = this.record as Record<3 | 5, CardKey>
          if (ctx.id === this.attrib.dis3) {
            record[3] = (
              ctx.item[ctx.choice] as DiscoverItem & { type: 'card' }
            ).card.name
          } else if (ctx.id === this.attrib.dis5) {
            record[5] = (
              ctx.item[ctx.choice] as DiscoverItem & { type: 'card' }
            ).card.name
          }
        },
        'insert-finish'({ ctx }, player) {
          if (ctx.id !== this.attrib.swapId) {
            return
          }
          if (ctx.choice === this.attrib.swapedIndex) {
            return
          }
          player.swap(this.attrib.swapedIndex, ctx.choice)
          this.enable = false
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
        this.attrib.swapedIndex = ci.index()
        this.attrib.swapId = player.push_insert(null)
      },
      record() {
        const record = this.record as Record<string, string>
        return Object.keys(record).map(k => `${k}: ${record[k]}`)
      },
    },
    凯瑞甘: {
      init() {
        this.progress.cur = 0
        this.progress.max = 5
      },
      listener: {
        'tavern-upgraded'(m, player) {
          player.attrib.alter('free-refresh', 1)
        },
        'round-enter'() {
          this.progress.cur = 0
        },
        bought({ action }, player) {
          if (action === 'combine') {
            return
          }
          this.progress.cur += 1
          if (this.progress.cur === this.progress.max) {
            player.set_role(player.roles.indexOf(this), '凯瑞甘(异虫形态)')
          }
        },
      },
    },
    '凯瑞甘(异虫形态)': {
      init(player) {
        this.enhance = true
        player.gas = 0
        player.gas_max = 0
        player.all().forEach(ci => {
          if (ci.occupy.length > 0) {
            ci.load_unit(CardData[ci.occupy[0]], true)
          }
        })
      },
      listener: {
        'card-entered'({ target }, player) {
          player.push_discover(
            player.$ref$Game.lcg
              .shuffle(
                AllUpgrade.map(u => UpgradeData[u]).filter(
                  u => u.category === 'combine'
                )
              )
              .slice(0, 3)
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
    米拉: {
      init() {
        this.progress.cur = 6
      },
      listener: {
        'card-entered'({ target }, player) {
          if (target.level > this.progress.cur) {
            player.obtain_resource({
              mineral: 1,
            })
          }
          this.progress.cur = target.level
        },
      },
    },
    先知: {
      init() {
        this.enable = true
      },
      listener: {
        'round-enter'() {
          this.enhance = true
        },
        'upgrade-cancelled'(m, player) {
          if (this.enhance) {
            this.enhance = false
            player.obtain_resource({
              gas: 1,
            })
          }
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        const ci = player.query_selected_present()
        if (!ci || ci.upgrades.length === ci.config.MaxUpgrade) {
          return
        }
        player.push_discover(
          player.$ref$Game.lcg
            .shuffle(
              AllUpgrade.map(u => UpgradeData[u]).filter(
                u => u.category === 'combine'
              )
            )
            .slice(0, 3)
            .map(upgrade => ({
              type: 'upgrade',
              upgrade,
            })),
          {
            target: ci.index(),
          }
        )
        this.enable = false
      },
    },
    阿尔达瑞斯: {
      listener: {
        'get-buy-cost'(m, player) {
          const s = player.store[m.place]
          if (s) {
            if (s.special) {
              m.cost = Math.min(m.cost, 2)
              if (m.time === 'real') {
                s.special = false
              }
            }
          }
        },
        refreshed(m, player) {
          player.store.forEach(s => {
            if (s) {
              s.special = false
            }
          })
        },
        'round-leave'(m, player) {
          if (player.locked) {
            player.store.forEach(s => {
              if (s) {
                s.special = true
              }
            })
          }
        },
      },
    },
    斯托科夫: {
      init() {
        this.progress.cur = 0
      },
      listener: {
        'round-enter'(m, player) {
          this.enable = player.life > this.progress.cur
        },
        'tavern-upgraded'() {
          this.progress.cur += 3
        },
      },
      ability(player) {
        if (!this.enable) {
          return
        }
        player.life -= this.progress.cur

        player.do_refresh(n =>
          player.$ref$Game.pool.discover(c => c.level === player.level, n)
        )

        this.enable = false
      },
    },
    解放者: {
      init(player) {
        this.enable = false
        this.attrib.fr = 1
        player.attrib.alter('free-refresh', 1)
      },
      listener: {
        'round-enter'(m, player) {
          this.enable = true
          this.attrib.fr = 1
          player.attrib.alter('free-refresh', 1)
        },
        refreshed({ cost }, player) {
          if (cost > 0) {
            this.attrib.fr = 1
            player.attrib.alter('free-refresh', 1)
          } else {
            this.attrib.fr = 0
          }
        },
        'get-buy-cost'(m) {
          m.cost = 4
        },
      },
      ability(player) {
        if (this.attrib.fr) {
          player.attrib.alter('free-refresh', -1)
        }
        delete this.attrib.fr
        player.set_role(player.roles.indexOf(this), '解放者(防卫模式)', true)
      },
    },
    '解放者(防卫模式)': {
      init(player) {
        this.enable = false
        player.config.RefreshDisabled = true
      },
      listener: {
        'round-enter'() {
          this.enable = true
        },
        'get-buy-cost'(m) {
          m.cost = Math.min(m.cost, 2)
        },
      },
      ability(player) {
        player.config.RefreshDisabled = false
        player.set_role(player.roles.indexOf(this), '解放者', true)
      },
    },
    干扰者: {
      listener: {
        'round-enter'(m, player) {
          const x = player.hand
            .filter(notNull)
            .map(h => CardData[h.card])
            .filter(c => c.type !== 'support').length
          player.upgrade_cost = Math.max(
            player.upgrade_cost - Math.max(x - 2, 0),
            0
          )
        },
      },
    },
  }
  for (const r in res) {
    const impl = res[r as keyof typeof res] as Partial<RoleImpl>
    impl.init = impl.init || (() => void 0)
    impl.listener = impl.listener || {}
    impl.ability = impl.ability || (() => void 0)
    impl.record = impl.record || (() => [])
  }
  return res as Record<RoleKey, RoleImpl>
}

const t = CreateRoleTable()

export default t
