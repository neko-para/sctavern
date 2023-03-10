import {
  canElite,
  elited,
  isNormal,
  UnitData,
  UpgradeKey,
} from '@sctavern/data'
import type { UnitKey } from '@sctavern/data'
import type { CardInstance } from '../card'
import type { Descriptor } from '../types'
import { rep } from '../utils'

function 集结X(
  power: number,
  effect: (ci: CardInstance) => void,
  id = 0
): Descriptor {
  return {
    listener: {
      'round-end'() {
        const cnt = Math.min(2, Math.floor(this.power() / power))
        for (let i = 0; i < cnt; i++) {
          this.regroup(id)
        }
      },
      'req-regroup'({ id: i }) {
        if (id === i || i === -1) {
          effect(this)
        }
      },
    },
  }
}

export default function (/* config */): Record<string, Descriptor> {
  return {
    集结: {
      listener: {
        'round-end'(m, [power, id]) {
          const cnt = Math.min(2, Math.floor(this.power() / Number(power)))
          for (let i = 0; i < cnt; i++) {
            this.regroup(Number(id))
          }
        },
        'req-regroup'({ id: i }, [power, id, way, unit, norm, gold]) {
          if (Number(id) === i || i === 1) {
            if (way === '获得') {
              this.obtain_unit(
                rep(unit as UnitKey, this.gold ? Number(gold) : Number(norm))
              )
            } else {
              this.$ref$Player.warp(
                rep(unit as UnitKey, this.gold ? Number(gold) : Number(norm))
              )
            }
          }
        },
      },
      text: ([power, id, way, unit, norm, gold]) => [
        `集结(${power}): ${way}${norm}${unit}`,
        `集结(${power}): ${way}${gold}${unit}`,
      ],
    },

    折跃援军0: {
      listener: {
        'post-sell'() {
          this.$ref$Player.warp([
            ...rep('狂热者', this.gold ? 2 : 1),
            ...rep('追猎者', this.gold ? 4 : 2),
          ])
        },
      },
    },
    供能中心0: {
      listener: {
        'tavern-upgraded'() {
          this.obtain_unit(rep('水晶塔', this.gold ? 2 : 1))
        },
      },
    },
    龙骑兵团0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('零件', this.gold ? 4 : 2))
        },
      },
    },
    龙骑兵团1: {
      listener: {
        'post-sell'() {
          this.$ref$Player.warp(rep('龙骑士', this.find('零件').length))
        },
      },
    },
    万叉奔腾0: { refer: '集结:2:0:获得:狂热者:1:2' },
    折跃信标0: {
      config: {
        unique: 'left',
      },
      note: (ci, act) => [act ? '启用' : '停用'],
      listener: {
        warp(m) {
          m.into = this
        },
      },
    },
    艾尔之刃0: {
      listener: {
        'post-enter'() {
          this.around()
            .filter(c => c.race === 'P')
            .forEach(ci => ci.obtain_unit(rep('水晶塔', this.gold ? 2 : 1)))
        },
      },
    },
    折跃部署0: {
      listener: {
        'round-end'() {
          this.$ref$Player.warp(rep('追猎者', this.gold ? 3 : 2))
        },
      },
    },
    折跃部署1: {
      listener: {
        'round-start'() {
          this.$ref$Player.warp(rep('狂热者', this.gold ? 2 : 1))
        },
      },
    },
    暗影卫队0: {
      listener: {
        'post-enter'() {
          this.obtain_upgrade('暗影战士')
        },
      },
    },
    暗影卫队1: { refer: '集结:3:0:获得:黑暗圣堂武士:1:2' },
    暗影卫队2: {
      listener: {
        'round-end'() {
          if (this.power() >= 6) {
            this.obtain_unit(['黑暗圣堂武士'])
          }
        },
      },
    },
    重回战场0: {
      listener: {
        'post-enter'() {
          this.$ref$Player.all_of('P').forEach(ci => {
            ci.replace(
              ci.find(u => !!UnitData[u].tag.biological, this.gold ? 2 : 1),
              u => (UnitData[u].tag.heroic ? '英雄不朽者' : '不朽者')
            )
          })
        },
      },
    },
    重回战场1: {
      listener: {
        'post-sell'() {
          this.$ref$Player.warp(rep('不朽者', this.gold ? 2 : 1))
        },
      },
    },
    折跃攻势0: {
      listener: {
        warp() {
          this.obtain_unit(rep('追猎者', this.gold ? 2 : 1))
        },
      },
    },
    净化者军团0: 集结X(5, ci => {
      const us: UnitKey[] = []
      ci.$ref$Player.all_of('P').forEach(c => {
        const idx = c.find(
          u =>
            canElite(ci.$ref$Player.$ref$Game.config.ActiveUnit, u) &&
            !UnitData[u].tag.massive
        )
        ci.$ref$Player.$ref$Game.lcg.shuffle(idx)
        const tran = idx.slice(0, ci.gold ? 2 : 1)
        us.push(...c.filter((u, i) => tran.includes(i)).map(elited))
      })
      ci.$ref$Player.warp(us)
    }),
    凯拉克斯0: {
      listener: {
        'round-end'() {
          this.$ref$Player.warp(
            rep(
              (['不朽者', '巨像', '掠夺者'] as UnitKey[])[
                this.$ref$Player.$ref$Game.lcg.int(2)
              ],
              this.gold ? 2 : 1
            )
          )
        },
      },
    },
    虚空舰队0: { refer: '集结:5:0:折跃:虚空辉光舰:1:2' },
    势不可挡0: {
      listener: {
        'post-enter'() {
          this.$ref$Player.warp(rep('执政官(精英)', this.gold ? 2 : 1))
        },
      },
    },
    势不可挡1: { refer: '集结:5:0:折跃:执政官:1:2' },
    势不可挡2: {
      listener: {
        'round-end'() {
          if (this.power() >= 15) {
            this.$ref$Player.warp(['执政官(精英)'])
          }
        },
      },
    },
    黄金舰队0: { refer: '集结:5:0:获得:侦察机:1:2' },
    黄金舰队1: { refer: '集结:7:1:获得:风暴战舰:1:2' },
    尤尔兰0: {
      config: {
        init: {
          供能: [5, 8],
        },
        deinit: {
          供能: [-5, -8],
        },
      },
    },
    尤尔兰1: {
      listener: {
        'obtain-unit'({ time, units }) {
          if (
            time === 'post' &&
            (units.includes('水晶塔') || units.includes('虚空水晶塔'))
          ) {
            this.obtain_unit(rep('莫汗达尔', this.gold ? 2 : 1))
          }
        },
      },
    },
    尤尔兰2: {
      listener: {
        'obtain-unit'(m) {
          if (m.time === 'prev' && m.way === 'warp') {
            m.units = m.units.map(u =>
              UnitData[u].tag.mechanical ? '尤尔兰' : u
            )
          }
        },
      },
    },
    光复艾尔0: {
      listener: {
        'obtain-upgrade'() {
          this.replace(this.find('泰坦棱镜<已收起>'), '泰坦棱镜')
        },
      },
    },
    光复艾尔1: {
      config: {
        unique: 'left',
        uniqueDisabled(ci) {
          return ci.find('泰坦棱镜').length > 0
        },
      },
      note(ci, act) {
        return [
          act ? '启用' : '禁用',
          ci.find('泰坦棱镜').length > 0
            ? '已展开'
            : ci.find('泰坦棱镜<已收起>').length > 0
            ? '已收起'
            : '无棱镜',
        ]
      },
      listener: {
        'card-selled'({ target }) {
          if (target.race !== 'P') {
            return
          }
          this.replace(this.find('泰坦棱镜'), '泰坦棱镜<已收起>')
          this.obtain_unit(
            target.units
              .filter(u => isNormal(UnitData[u]) || u === '水晶塔')
              .filter(u => this.gold || !UnitData[u].tag.heroic)
          )
        },
      },
    },
    菲尼克斯0: {
      listener: {
        'post-enter'() {
          this.around().forEach(ci => {
            ci.replace(ci.find(['狂热者', '使徒']), '旋风狂热者')
            ci.replace(
              ci.find(['狂热者(精英)', '使徒(精英)']),
              '旋风狂热者(精英)'
            )
          })
        },
      },
    },
    菲尼克斯1: { refer: '集结:5:0:获得:掠夺者:1:2' },
    酒馆后勤处0: {
      listener: {
        'post-enter'() {
          this.$ref$Player.all().forEach(ci => {
            ci.regroup(-1)
            ci.regroup(-1)
          })
        },
      },
    },
    净化一切0: { refer: '集结:4:0:折跃:狂热者(精英):1:2' },
    净化一切1: {
      listener: {
        'round-end'() {
          this.$ref$Player.warp(
            rep(
              '巨像(精英)',
              (this.gold ? 2 : 1) * Math.min(2, Math.floor(this.power() / 7))
            )
          )
        },
      },
    },
    阿尔达瑞斯0: {
      config: {
        unique: 'normal',
      },
      listener: {
        'round-end'() {
          if (this.$ref$Player.all_of('P').length >= 5) {
            this.obtain_unit(rep('英雄不朽者', this.gold ? 2 : 1))
          }
        },
      },
    },
    阿塔尼斯0: {
      listener: {
        'round-end'() {
          this.obtain_unit(
            rep('旋风狂热者(精英)', 2).concat(
              rep('阿塔尼斯', this.gold ? 2 : 0)
            )
          )
        },
      },
    },
    阿塔尼斯1: {
      config: {
        unique: 'left', // 反正金色不金色都是一次, 菜, 大主教菜
      },
      listener: {
        'round-end'() {
          this.$ref$Player.all().forEach(ci => {
            ci.regroup(-1)
          })
        },
      },
    },
    净化之光0: {
      listener: {
        'round-end'() {
          this.obtain_unit(rep('虚空辉光舰', this.gold ? 2 : 1))
        },
      },
    },
    净化之光1: 集结X(4, ci => {
      ci.$ref$Player.all().forEach(c => {
        c.replace(c.find('虚空辉光舰', ci.gold ? 2 : 1), elited)
      })
    }),
    生物质发电0: {
      listener: {
        'card-selled'({ target }) {
          if (target.level >= 3 && target.race === 'Z') {
            this.obtain_unit(rep('水晶塔', this.gold ? 2 : 1))
          }
        },
      },
    },
    黑暗教长0: {
      listener: {
        'post-enter'() {
          this.obtain_upgrade('暗影战士')
        },
      },
    },
    黑暗教长1: { refer: '集结:3:0:获得:黑暗圣堂武士(精英):1:2' },
    六脉神剑0: {
      listener: {
        'card-entered'() {
          if (this.find('先知').length < this.power()) {
            this.$ref$Player.warp(rep('先知', this.gold ? 2 : 1))
          }
        },
      },
    },
    晋升仪式0: 集结X(4, ci => {
      ci.replace(ci.find('不朽者', ci.gold ? 2 : 1), '英雄不朽者')
      ci.replace(
        ci.find(
          u => u !== '高阶圣堂武士' && !!UnitData[u].tag.biological,
          ci.gold ? 2 : 1
        ),
        '高阶圣堂武士'
      )
    }),
    英雄叉0: {
      listener: {
        'obtain-unit'(m) {
          if (m.time === 'prev' && m.way === 'warp') {
            m.units = m.units.map(u =>
              u === '狂热者(精英)' ? '卡尔达利斯' : u
            )
          }
        },
      },
    },
    人格上传0: {
      listener: {
        'card-selled'({ target }) {
          if (target.name === '虫卵') {
            return
          }
          if (target.value() > this.value()) {
            this.obtain_unit(rep('菲尼克斯', this.gold ? 3 : 1))
          }
          if (target.upgrades.length > this.upgrades.length) {
            const us: UpgradeKey[] = []
            target.upgrades.forEach(u => {
              if (!us.includes(u)) {
                us.push(u)
              }
            })
            us.slice(0, this.gold ? 3 : 1).forEach(u => {
              this.obtain_upgrade(u)
            })
          }
        },
      },
    },
    星灵奥数0: {
      listener: {
        'round-start'() {
          const ls = this.$ref$Player
            .all()
            .map(ci => ci.level)
            .reduce((a, b) => a + b, 0)
          if (ls === 21) {
            this.obtain_unit(rep('风暴战舰', 2))
            this.$ref$Player.obtain_resource({
              gas: 1,
            })
          }
        },
      },
    },
  }
}
