import {
  Race,
  CardBelong,
  UnitKey,
  UpgradeKey,
  CardKey,
  CardData,
  Card,
  UnitData,
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

    this.occupy = []

    this.units = setupUnits
      ? (Object.keys(card.unit) as UnitKey[])
          .map(u => rep(u, card.unit[u] as number))
          .flat()
      : []
    this.upgrades = []
    this.descs = []
  }

  index() {
    return this.$ref$Player.present.findIndex(x => x?.card === this)
  }

  left(realPos = -1) {
    const pos = realPos === -1 ? this.index() : realPos
    if (pos > 0) {
      return this.$ref$Player.present[pos - 1]?.card || null
    } else {
      return null
    }
  }

  right(realPos = -1) {
    const pos = realPos === -1 ? this.index() : realPos
    if (pos < 6) {
      // 这里不能用present的长度, 因为出售时卡牌被临时添加到了present结尾, 若realPos为6则会导致将右侧卡牌判定为自己
      return this.$ref$Player.present[pos + 1]?.card || null
    } else {
      return null
    }
  }

  around(realPos = -1) {
    return [this.left(realPos), this.right(realPos)].filter(notNull)
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
      card: this.index(),
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

  add_desc(d: string) {
    this.descs.push(d)
    const ds = DescriptorTable[d]
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
  }

  value() {
    return this.units.map(u => UnitData[u].value).reduce((a, b) => a + b, 0)
  }
}
