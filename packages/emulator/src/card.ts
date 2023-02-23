import type {
  Race,
  CardBelong,
  UnitKey,
  UpgradeKey,
  CardKey,
  Card,
} from '@sctavern/data'
import { UnitData, UpgradeData, CardData } from '@sctavern/data'
import { Dispatch } from './dispatch'
import type { GenericListener, InnerMsg } from './events'
import type { PlayerInstance } from './player'
import type { CardConfig, DistributiveOmit, ObtainUnitWay } from './types'
import { mostValueUnit, notNull, rep } from './utils'
import DescriptorTable from './descriptor'
import { Attribute } from './attrib'

const cardBind: GenericListener<CardInstance> = {
  'post-enter'() {
    if (this.attrib.get('structure')) {
      this.obtain_unit(rep('自动机炮', this.$ref$Player.level))
    }
  },
  'round-end': function () {
    if (this.race === 'T' && this.infr() === '高级科技实验室') {
      this.fast_prod()
    }
  },
  'post-sell': function () {
    const n = this.find('虚空水晶塔').length
    if (n > 0) {
      for (const c of this.around(this.attrib.get('oldpos'))) {
        if (c.race === 'P') {
          c.obtain_unit(rep('虚空水晶塔', n))
          break
        }
      }
    }
  },
}

export class CardInstance {
  $ref$Player: PlayerInstance
  config: CardConfig
  attrib: Attribute

  name: string
  race: Race
  level: number
  gold: boolean
  color: 'normal' | 'amber' | 'red'
  belong: CardBelong

  occupy: CardKey[]

  units: UnitKey[]
  upgrades: UpgradeKey[]
  descs: string[]

  constructor(player: PlayerInstance, card: Card, setupUnits = true) {
    this.$ref$Player = player
    this.config = {
      MaxUnit: player.config.MaxUnitPerCard,
      MaxUpgrade: player.config.MaxUpgradePerCard,
    }
    this.attrib = new Attribute()

    this.name = card.name
    this.race = card.race
    this.level = card.level
    this.gold = !!card.attr.gold
    this.color = card.attr.nocombine
      ? 'amber'
      : card.attr.red
      ? 'red'
      : 'normal'
    this.belong = card.belong
    if (this.belong === 'virtual') {
      this.attrib.set('void', 1)
    }
    if (card.type === 'structure') {
      this.attrib.set('structure', 1)
    }

    this.occupy = []
    this.units = []
    this.upgrades = []
    this.descs = []

    if (setupUnits) {
      this.load_unit(card)
    }
  }

  rindex() {
    return this.$ref$Player.present.findIndex(x => x?.card === this)
  }

  index() {
    const idx = this.rindex()
    return idx === 7 ? this.attrib.get('oldpos') : idx
  }

  left(pos = -1) {
    if (pos === -1) {
      pos = this.index()
    }
    if (pos > 0) {
      return this.$ref$Player.present[pos - 1]?.card || null
    } else {
      return null
    }
  }

  right(pos = -1) {
    if (pos === -1) {
      pos = this.index()
    }
    if (pos < 6) {
      // 这里不能用present的长度, 因为出售时卡牌被临时添加到了present结尾, 若realPos为6则会导致将右侧卡牌判定为自己
      return this.$ref$Player.present[pos + 1]?.card || null
    } else {
      return null
    }
  }

  around(pos = -1) {
    return [this.left(pos), this.right(pos)].filter(notNull)
  }

  find(u: UnitKey | UnitKey[] | ((unit: UnitKey) => boolean), maxi?: number) {
    const pred =
      typeof u === 'string'
        ? (unit: UnitKey) => unit === u
        : u instanceof Array
        ? (unit: UnitKey) => u.includes(unit)
        : u
    return this.units
      .map((u, i) => ({
        u,
        i,
      }))
      .filter(({ u }) => pred(u))
      .map(({ i }) => i)
      .slice(0, maxi)
  }

  findu(u: UnitKey | UnitKey[] | ((unit: UnitKey) => boolean), maxi?: number) {
    const pred =
      typeof u === 'string'
        ? (unit: UnitKey) => unit === u
        : u instanceof Array
        ? (unit: UnitKey) => u.includes(unit)
        : u
    return this.units.filter(u => pred(u)).slice(0, maxi)
  }

  filter(pred: UnitKey | ((unit: UnitKey, pos: number) => boolean), maxi = -1) {
    const taked: UnitKey[] = []
    const realp = typeof pred === 'string' ? (u: UnitKey) => u === pred : pred
    if (maxi === -1) {
      maxi = this.units.length
    }
    this.units = this.units.filter((u, i) => {
      if (realp(u, i) && taked.length < maxi) {
        taked.push(u)
        return false
      } else {
        return true
      }
    })
    return taked
  }

  replace(places: number[], unit: UnitKey | ((u: UnitKey) => UnitKey)) {
    const proc = typeof unit === 'string' ? () => unit : unit
    places.forEach(idx => {
      if (idx >= 0 && idx < this.units.length) {
        this.units[idx] = proc(this.units[idx])
      }
    })
  }

  post<
    M extends Extract<InnerMsg, { player: number; card: number }>,
    MM extends DistributiveOmit<M, 'player' | 'card'>
  >(msg: MM): MM & { player: number; card: number } {
    const m = {
      ...msg,
      player: this.$ref$Player.index(),
      card: this.rindex(),
    }
    this.$ref$Player.$ref$Game.post(m)
    return m
  }

  answer(msg: InnerMsg) {
    Dispatch(cardBind, msg, this)
    for (const d of this.descs) {
      if (this.$ref$Player.check_unique_active(d, this.index())) {
        const [desc, extra] = DescriptorTable(d)
        const l = desc.listener
        if (l) {
          Dispatch(l, msg, this, extra)
        }
      }
    }
  }

  obtain_unit(units: UnitKey[], way: ObtainUnitWay = 'normal') {
    const msg = this.post({
      msg: 'obtain-unit',
      units,
      way,
      time: 'prev',
    })
    msg.units = msg.units.slice(0, this.config.MaxUnit - this.units.length)
    this.units = [...this.units, ...msg.units]
    if (msg.units.length > 0) {
      this.post({
        msg: 'obtain-unit',
        units: msg.units,
        way,
        time: 'post',
      })
    }
  }

  obtain_upgrade(upgrade: UpgradeKey) {
    if (this.upgrades.length >= this.config.MaxUpgrade) {
      return
    }
    const u = UpgradeData[upgrade]
    if (!u.override && this.upgrades.includes(upgrade)) {
      return
    }
    this.upgrades.push(upgrade)
    switch (upgrade) {
      case '折跃援军':
        this.obtain_unit([
          ...rep('水晶塔', 2),
          ...rep('狂热者', 2),
          ...rep('激励者', 2),
        ])
        break
      case '修理无人机':
        this.obtain_unit(rep('修理无人机', this.$ref$Player.level + 3))
        break
      case '黄金矿工':
        this.gold = true
        this.color = 'normal'
        this.clear_desc()
        this.add_desc('黄金矿工0')
        this.add_desc('黄金矿工1')
        this.fix_upgrade()
        break
      case '献祭': {
        const vo = (unit: UnitKey) => {
          if (unit === '莎拉·凯瑞甘' || unit === '刀锋女王') {
            return 10000
          } else {
            return UnitData[unit].value
          }
        }
        if (this.units.length <= 1) {
          this.attrib.set('sacrifice', 0)
          this.attrib.set('extraValue', 0)
        } else {
          const { index } = mostValueUnit(this.units, (a, b) => a > b, vo)
          const res = this.filter((u, i) => i !== index).map(u => UnitData[u])

          const sum =
            res
              .map(u => u.health + (u.shield || 0))
              .reduce((a, b) => a + b, 0) * 1.5
          const vsum = res
            .map(u => this.$ref$Player.get_unit_value(u.name))
            .reduce((a, b) => a + b, 0)

          this.attrib.set('sacrifice', sum)
          this.attrib.set('extraValue', vsum)
        }
        this.add_desc('献祭')
        break
      }
      case '原始尖塔':
        this.add_desc('原始尖塔')
        break
    }
    this.post({
      msg: 'obtain-upgrade',
      upgrade,
    })
  }

  infr() {
    const infs = ['反应堆', '科技实验室', '高级科技实验室'] as UnitKey[]
    const idx = this.units.findIndex(u => infs.includes(u))
    return idx === -1
      ? false
      : (this.units[idx] as '反应堆' | '科技实验室' | '高级科技实验室')
  }

  self_power() {
    return (
      (this.find(u => ['水晶塔', '虚空水晶塔'].includes(u)).length +
        this.attrib.get('供能')) *
      this.$ref$Player.config.ProtossPowerMultiplier
    )
  }

  power() {
    return (
      this.$ref$Player.config.ProtossPowerAll
        ? this.$ref$Player.all()
        : this.around().concat(this)
    )
      .map(c => c.self_power())
      .reduce((a, b) => a + b, 0)
  }

  infr_changed() {
    this.$ref$Player.post({
      msg: 'infr-changed',
      target: this,
    })
    this.fast_prod()
  }

  fast_prod() {
    this.post({
      msg: 'fast-produce',
    })
  }

  switch_infr() {
    const u = this.infr()
    if (u && u !== '高级科技实验室') {
      this.units[this.units.indexOf(u)] =
        u === '反应堆' ? '科技实验室' : '反应堆'
      this.infr_changed()
    }
  }

  upgrade_infr() {
    const u = this.infr()
    if (u && u !== '高级科技实验室') {
      this.units[this.units.indexOf(u)] = '高级科技实验室'
      this.infr_changed()
    }
  }

  hatch(id: number) {
    this.post({
      msg: 'req-hatch',
      id,
    })
  }

  regroup(id: number) {
    this.post({
      msg: 'req-regroup',
      id,
    })
  }

  gain_darkness(dark: number) {
    if (this.attrib.has('dark')) {
      this.attrib.alter('dark', dark)
      if (dark > 0) {
        this.post({
          msg: 'obtain-darkness',
          darkness: dark,
        })
      }
    }
  }

  set_void() {
    this.attrib.set('void', 1)
  }

  seize(
    target: CardInstance,
    option?: {
      fake?: boolean
      withUpgrade?: boolean
    }
  ) {
    if (!option?.fake) {
      this.$ref$Player.post({
        msg: 'seize',
        target,
        from: this,
      })
    }
    this.obtain_unit(target.units)
    if (option?.withUpgrade) {
      target.upgrades.forEach(u => this.obtain_upgrade(u))
    }
    this.$ref$Player.destroy(target)
  }

  add_desc(d: string) {
    this.descs.push(d)
    const [desc] = DescriptorTable(d)
    if (desc.config?.init) {
      for (const k in desc.config.init) {
        this.attrib.alter(k, desc.config.init[k][this.gold ? 1 : 0])
      }
    }
  }

  fix_upgrade() {
    this.upgrades.forEach(u => {
      switch (u) {
        case '献祭':
          this.add_desc('献祭')
          break
        case '原始尖塔':
          this.add_desc('原始尖塔')
          break
      }
    })
  }

  load_desc(cd: Card, fixUpgrade = true) {
    cd.desc
      .map((d, i) => `${cd.name}${i}`)
      .forEach(d => {
        this.add_desc(d)
      })
    if (fixUpgrade) {
      this.fix_upgrade()
    }
  }

  load_unit(
    cd: Card,
    fake = true,
    filter: (u: UnitKey) => boolean = () => true
  ) {
    const us = (Object.keys(cd.unit) as UnitKey[])
      .filter(filter)
      .map(u => rep(u, cd.unit[u] as number))
      .flat()
    if (fake) {
      this.units = [...this.units, ...us].slice(0, this.config.MaxUnit)
    } else {
      this.obtain_unit(us)
    }
  }

  clear_desc() {
    for (const d of this.descs) {
      const [desc] = DescriptorTable(d)
      if (desc.config?.deinit) {
        for (const k in desc.config.deinit) {
          this.attrib.alter(k, desc.config.deinit[k][0])
        }
      }
    }
    this.descs = []
  }

  value() {
    return this.units
      .map(u => this.$ref$Player.get_unit_value(u))
      .reduce((a, b) => a + b, this.attrib.get('extraValue'))
  }

  extraNote() {
    const res: string[] = []

    if (this.attrib.get('structure')) {
      res.push('建筑卡')
    }

    switch (this.belong) {
      case 'primal':
        res.push('属于原始虫群')
        break
      case 'virtual':
        res.push('属于虚影')
        break
    }

    if (this.race === 'T') {
      const i = this.infr()
      if (i) {
        res.push(i)
      }
    }

    if (this.race === 'P' || this.power() > 0) {
      res.push(`能量强度: ${this.power()}`)
    }

    if (this.attrib.has('dark')) {
      res.push(`黑暗值: ${this.attrib.get('dark')}`)
    }

    if (this.attrib.get('void')) {
      const cnt = this.$ref$Player.count()
      res.push(
        `虚空投影: ${
          Object.keys(cnt)
            .map(r => (cnt[r as Race] ? 1 : 0))
            .reduce((a, b) => a + b, -1) *
            15 +
          this.$ref$Player.get_extra_void()
        }%`
      )
    }

    if (this.attrib.has('sacrifice')) {
      res.push(`献祭的生命值: ${this.attrib.get('sacrifice')}`)
    }

    return res
  }
}
