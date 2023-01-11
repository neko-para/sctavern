import {
  Race,
  CardBelong,
  UnitKey,
  UpgradeKey,
  CardKey,
  CardData,
} from '@sctavern/data'
import { Dispatch } from './dispatch'
import { GenericListener, InnerMsg } from './events'
import { PlayerInstance } from './player'
import { CardConfig, DistributiveOmit, ObtainUnitWay } from './types'
import { rep } from './utils'
import DescriptorTable from './descriptor'
import { Attribute } from './attrib'

const cardBind: GenericListener<CardInstance> = {
  'round-end': function () {
    // if (this.race === 'T' && this.infr[0] === 'hightech') {
    // this.fast_prod()
    // }
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

  units: UnitKey[]
  upgrades: UpgradeKey[]
  descs: string[]

  constructor(player: PlayerInstance, card: CardKey) {
    this.$ref$Player = player
    this.config = {
      MaxUnit: player.config.MaxUnitPerCard,
      MaxUpgrade: player.config.MaxUpgradePerCard,
    }
    this.attrib = new Attribute()

    const cardt = CardData[card]

    this.name = card
    this.race = cardt.race
    this.level = cardt.level
    this.color = cardt.attr.amber ? 'amber' : 'normal'
    this.belong = cardt.belong

    this.units = (Object.keys(cardt.unit) as UnitKey[])
      .map(u => rep(u, cardt.unit[u] as number))
      .flat()
    this.upgrades = []
    this.descs = []
  }

  index() {
    return this.$ref$Player.present.findIndex(x => x?.card === this)
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
      Dispatch(DescriptorTable[d].listener, msg, this, DescriptorTable[d])
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
}
