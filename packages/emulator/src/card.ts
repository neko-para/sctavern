import {
  Race,
  CardBelong,
  UnitKey,
  UpgradeKey,
  CardKey,
  Card,
  UnitData,
  UpgradeData,
  CardData,
} from '@sctavern/data'
import { Dispatch } from './dispatch'
import { GenericListener, InnerMsg } from './events'
import { PlayerInstance } from './player'
import { CardConfig, DistributiveOmit, ObtainUnitWay } from './types'
import { notNull, rep } from './utils'
import DescriptorTable from './descriptor'
import { Attribute } from './attrib'

const cardBind: GenericListener<CardInstance> = {
  'round-end': function () {
    if (this.race === 'T' && this.infr() === '高级科技实验室') {
      this.fast_prod()
    }
  },
  'post-sell': function () {
    /*
    const n = this.find('虚空水晶塔').length
    if (n > 0) {
      for (const c of this.around()) {
        if (c.data.race === 'P') {
          await c.obtain_unit(us('虚空水晶塔', n))
          break
        }
      }
    }
    */
  },
}

export class CardInstance {
  $ref$Player: PlayerInstance
  config: CardConfig
  attrib: Attribute

  name: string
  race: Race
  level: number
  color: 'normal' | 'amber' | 'gold'
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
    this.color = card.attr.amber ? 'amber' : 'normal'
    this.belong = card.belong
    if (card.type === 'structure') {
      this.attrib.set('structure', 1)
    }

    this.occupy = []

    this.units = setupUnits
      ? (Object.keys(card.unit) as UnitKey[])
          .map(u => rep(u, card.unit[u] as number))
          .flat()
      : []
    this.upgrades = []
    this.descs = []
  }

  rindex() {
    return this.$ref$Player.present.findIndex(x => x?.card === this)
  }

  index() {
    const idx = this.rindex()
    return idx === 7 ? this.attrib.get('oldpos') : idx
  }

  left() {
    const pos = this.index()
    if (pos > 0) {
      return this.$ref$Player.present[pos - 1]?.card || null
    } else {
      return null
    }
  }

  right() {
    const pos = this.index()
    if (pos < 6) {
      // 这里不能用present的长度, 因为出售时卡牌被临时添加到了present结尾, 若realPos为6则会导致将右侧卡牌判定为自己
      return this.$ref$Player.present[pos + 1]?.card || null
    } else {
      return null
    }
  }

  around() {
    return [this.left(), this.right()].filter(notNull)
  }

  find(u: UnitKey | ((unit: UnitKey) => boolean), maxi?: number) {
    const pred = typeof u === 'string' ? (unit: UnitKey) => unit === u : u
    return this.units
      .map((u, i) => ({
        u,
        i,
      }))
      .filter(({ u }) => pred(u))
      .map(({ i }) => i)
      .slice(0, maxi)
  }

  filter(pred: (unit: UnitKey, pos: number) => boolean, maxi = -1) {
    const taked: UnitKey[] = []
    if (maxi === -1) {
      maxi = this.units.length
    }
    this.units = this.units.filter((u, i) => {
      if (pred(u, i) && taked.length < maxi) {
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
        Dispatch(DescriptorTable[d].listener, msg, this, DescriptorTable[d])
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
        this.clear_desc()
        this.color = 'gold'
        CardData['黄金矿工'].desc
          .map((d, i) => `黄金矿工${i}`)
          .forEach(d => {
            this.add_desc(d)
          })
        break
      // 献祭
    }
    this.post({
      msg: 'obtain-upgrade',
      upgrade,
    })
  }

  isg() {
    return this.color === 'gold'
  }

  isy() {
    return this.color !== 'normal'
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
      this.find(u => ['水晶塔', '虚空水晶塔'].includes(u)).length +
      this.attrib.get('供能')
    )
  }

  power() {
    return this.around()
      .map(c => c.self_power())
      .concat(this.self_power())
      .reduce((a, b) => a + b, 0)
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
      this.fast_prod()
    }
  }

  upgrade_infr() {
    const u = this.infr()
    if (u && u !== '高级科技实验室') {
      this.units[this.units.indexOf(u)] = '高级科技实验室'
      this.fast_prod()
    }
  }

  incubate(id: number) {
    this.post({
      msg: 'req-incubate',
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

  add_desc(d: string) {
    this.descs.push(d)
    const ds = DescriptorTable[d]
    if (!ds) {
      console.log(d)
    }
    if (ds.config?.init) {
      for (const k in ds.config.init) {
        this.attrib.alter(k, ds.config.init[k][this.isg() ? 1 : 0])
      }
    }
  }

  clear_desc() {
    for (const d of this.descs) {
      const ds = DescriptorTable[d]
      if (ds.config?.deinit) {
        for (const k in ds.config.deinit) {
          this.attrib.alter(k, ds.config.deinit[k][0])
        }
      }
    }
    this.descs = []
  }

  value() {
    return this.units.map(u => UnitData[u].value).reduce((a, b) => a + b, 0)
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

    return res
  }
}
