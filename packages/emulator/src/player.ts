import {
  RoleKey,
  CardKey,
  RoleData,
  CardData,
  UpgradeData,
  Card,
} from '@sctavern/data'
import { CardInstance } from './card'
import { Dispatch } from './dispatch'
import { InnerMsg, GenericListener } from './events'
import { GameInstance } from './game'
import {
  PlayerConfig,
  GameArea,
  PlayerStatus,
  DistributiveOmit,
  RoleInstance,
  DiscoverContext,
  DiscoverItem,
} from './types'
import { notNull, rep } from './utils'
import RoleTable from './role'
import { Attribute } from './attrib'
import { v4 as uuidv4 } from 'uuid'

const playerBind: GenericListener<PlayerInstance> = {
  $upgrade: function () {
    if (this.level < 6 && this.mineral >= this.upgrade_cost) {
      this.mineral -= this.upgrade_cost
      this.level += 1
      this.upgrade_cost = this.config.TavernUpgrade[this.level]
      if (this.store.length < this.config.StoreCount[this.level]) {
        this.store.push(null)
      }
      this.post({
        msg: 'tavern-upgraded',
        level: this.level,
      })
    }
  },
  $refresh: function () {
    if (this.mineral < this.role_refresh_cost()) {
      return
    }
    this.mineral -= this.role_refresh_cost()
    this.do_refresh()

    this.role_refreshed()
  },
  $finish: function () {
    if (this.status === 'normal') {
      this.status = 'finish'
      // TODO: Notify game
      this.$ref$Game.roundEnd()
    }
  },
  $ability: function () {
    if (!this.role.enable) {
      return
    }
    this.role_impl().ability.call(this.role, this)
  },
  $lock: function () {
    this.locked = true
  },
  $unlock: function () {
    this.locked = false
  },
  $select: function ({ area, place }) {
    this.selected = {
      area,
      place,
    }
  },
  $choice: function ({ category, place }) {
    switch (category) {
      case 'insert':
        if (!this.insertCard) {
          return
        }
        this.status = 'normal'
        this.enter(this.insertCard, place)
        break
      case 'discover': {
        if (!this.discoverItem) {
          return
        }
        this.status = 'normal'
        const drop: Card[] = []
        const ctx = this.discoverItem
        if (!ctx.fake) {
          if (!ctx.nodrop) {
            ctx.item.forEach((item, i) => {
              if (i === place) {
                return
              }
              if (item.type === 'card') {
                drop.push(item.card)
              }
            })
          }
          if (place !== -1) {
            const result = ctx.item[place]
            if (result.type === 'card') {
              const ck = result.card.name
              if (this.can_stage()) {
                this.stage(ck)
              } else if (this.can_combine(ck)) {
                this.combine(ck)
              } else if (this.can_enter(ck)) {
                this.require_enter(ck)
              } else {
                // restore it
                drop.push(result.card)
              }
            } else if (result.type === 'upgrade') {
              if ('target' in ctx) {
                const ci = this.present[ctx.target as number]?.card
                if (ci && this.can_pres_upgrade(ci)) {
                  //
                }
              }
            }
          }
        }
        this.$ref$Game.pool.drop(drop)
        this.discoverItem = null
        this.post({
          msg: 'discover-finished',
          ctx,
        })
        break
      }
      default:
        return
    }
  },
  $action: function ({ area, action, place }) {
    switch (area) {
      case 'store': {
        const ck = this.store[place]?.card
        if (!ck || !this.can_buy(ck, action, place)) {
          return
        }
        switch (action) {
          case 'enter':
            if (!this.can_enter(ck)) {
              return
            }
            break
          case 'combine':
            if (!this.can_combine(ck)) {
              return
            }
            break
          case 'stage':
            if (!this.can_stage()) {
              return
            }
            break
        }
        this.mineral -= this.role_impl().buy_cost.call(
          this.role,
          this,
          ck,
          action,
          place
        )

        switch (action) {
          case 'enter':
            this.require_enter(ck)
            break
          case 'combine':
            this.combine(ck)
            break
          case 'stage':
            this.stage(ck)
            break
        }

        this.store[place] = null

        if (action !== 'combine') {
          this.role_impl().bought.call(this.role, this, ck, action, place)
        }
        break
      }
      case 'hand': {
        const ck = this.hand[place]?.card
        if (!ck) {
          return
        }
        switch (action) {
          case 'enter':
            if (!this.can_enter(ck)) {
              return
            }
            break
          case 'combine':
            if (!this.can_combine(ck)) {
              return
            }
            break
        }

        this.hand[place] = null

        switch (action) {
          case 'enter':
            this.require_enter(ck)
            break
          case 'combine':
            this.combine(ck)
            break
          case 'sell':
            if (CardData[ck].type !== 'support') {
              this.obtain_resource({
                mineral: 1,
              })
            }
            break
        }
        break
      }
      case 'present': {
        const c = this.present[place]?.card
        if (!c) {
          return
        }
        switch (action) {
          case 'sell':
            this.sell(c)
            break
          case 'upgrade': {
            if (!this.can_pres_upgrade(c)) {
              return
            }
            /*
            const comm: Upgrade[] = [],
              spec: Upgrade[] = []
            AllUpgrade.filter(u => !c.data.upgrades.includes(u))
              .map(getUpgrade)
              .forEach(u => {
                switch (u.category) {
                  case 'O':
                    if (c.data.belong === 'origin') {
                      spec.push(u)
                    }
                    break
                  case 'V':
                    if (c.data.belong === 'void') {
                      spec.push(u)
                    }
                    break
                  case 'T':
                  case 'P':
                  case 'Z':
                    if (c.data.race === u.category) {
                      spec.push(u)
                    }
                    break
                  case 'C':
                    comm.push(u)
                    break
                }
              })
            this.game.gen.shuffle(spec)
            const firstUpgrade = c.data.upgrades.length === 0
            const sp = spec.slice(
              0,
              firstUpgrade ? (c.data.belong === 'origin' ? 3 : 2) : 1
            )
            const item = this.game.gen
              .shuffle(comm)
              .slice(0, 4 - sp.length)
              .concat(sp)
            this.obtain_resource({
              gas: -2,
            })
            if (
              !this.discover(item, {
                target: c,
                extra: '放弃',
              })
            ) {
              this.obtain_resource({
                gas: 1,
              })
              this.post({
                msg: 'upgrade-cancelled',
                target: c,
              })
            }
            */
            break
          }
        }
        break
      }
    }
  },
  /*
  $cheat: async msg => {
    switch (msg.type) {
      case 'card':
        if (!this.can_stage()) {
          return
        }
        this.hand[this.hand.findIndex(v => v === null)] = msg.cardt
        break
      case 'unit':
        if (!this.present[msg.place]) {
          return
        }
        this.present[msg.place]?.obtain_unit(msg.units)
        break
      case 'resource':
        this.obtain_resource({
          mineral: 100,
          gas: 100,
        })
        break
    }
  },
  */
  'round-start': function () {
    if (this.status !== 'middle') {
      return
    }
    this.status = 'normal'
    this.attrib = new Attribute()
    if (this.upgrade_cost > 0) {
      this.upgrade_cost -= 1
    }
    if (this.mineral_max < this.config.MaxMineral) {
      this.mineral_max += 1
    }
    this.mineral = this.mineral_max
    if (this.gas < this.config.MaxGas) {
      this.gas += 1
    }
    if (this.persisAttrib.get('R解放者_模式')) {
      return
    }
    if (!this.locked) {
      this.$ref$Game.pool.drop(
        (this.store.filter(x => x !== null) as { card: CardKey }[]).map(
          x => CardData[x.card]
        )
      )
      this.store.fill(null)
    }
    this.locked = false
    this.fill_store()
  },
  'round-leave': function () {
    if (this.status !== 'finish') {
      return
    }
    this.status = 'middle'
  },
  /*
  'card-selled': function ({ target }) {
    if (target.data.race === 'N') {
      for (const c of this.present.filter(isCardInstance)) {
        c.obtain_unit(
          us('原始异龙', c.data.upgrades.filter(u => u === '原始尖塔').length)
        )
      }
    }
  },
  */
}

export class PlayerInstance {
  $ref$Game: GameInstance
  config: PlayerConfig
  attrib: Attribute
  persisAttrib: Attribute

  life: number
  level: number
  upgrade_cost: number

  status: PlayerStatus

  insertCard: CardKey | null
  discoverItem: DiscoverContext | null

  mineral: number
  mineral_max: number
  gas: number
  gas_max: number

  selected: {
    area: GameArea
    place: number
  }
  locked: boolean

  role: RoleInstance

  store: ({
    card: CardKey
    special: boolean
  } | null)[]
  hand: ({
    card: CardKey
  } | null)[]
  present: ({
    card: CardInstance
  } | null)[]

  constructor(game: GameInstance, rolekey: RoleKey) {
    const role = RoleData[rolekey]
    this.$ref$Game = game
    this.config = {
      MaxUnitPerCard: 200,
      MaxUpgradePerCard: 5,

      AlwaysInsert: false,
      StoreCount: [0, 3, 4, 4, 5, 5, 6],
      TavernUpgrade: [0, 5, 7, 8, 9, 11, 0],

      MaxMineral: 10,
      MaxGas: 6,
    }
    this.attrib = new Attribute()
    this.persisAttrib = new Attribute()

    this.life = 100
    this.level = 1
    this.upgrade_cost = 5 + 1

    this.status = 'middle'

    this.insertCard = null
    this.discoverItem = null

    this.mineral = 0
    this.mineral_max = 3 - 1

    this.gas = 0 - 1
    this.gas_max = 6

    this.selected = {
      area: 'none',
      place: -1,
    }
    this.locked = false

    this.role = {
      attrib: {},

      name: rolekey,
      ability: role.ability,
      desc: role.desc,
      enable: false,

      progress: null,
      enhance: true,
    }

    this.store = rep(null, 3)
    this.hand = rep(null, 6)
    this.present = rep(null, 7)
  }

  index() {
    return this.$ref$Game.player.indexOf(this)
  }

  post<
    M extends Extract<InnerMsg, { player: number }>,
    MM extends DistributiveOmit<M, 'player'>
  >(msg: MM): MM & { player: number } {
    const m = {
      ...msg,
      player: this.index(),
    }
    this.$ref$Game.post(m)
    return m
  }

  answer(msg: InnerMsg) {
    Dispatch(playerBind, msg, this)

    if ('card' in msg) {
      this.present[msg.card]?.card.answer(msg)
    } else {
      this.present.forEach(p => {
        if (p) {
          p.card.answer(msg)
        }
      })
    }
  }

  fill_store() {
    const nf = this.store.filter(c => !c).length
    const nc = this.$ref$Game.pool.discover(
      card => card.level <= this.level,
      nf,
      false
    )
    for (let i = 0; i < this.store.length; i++) {
      if (!this.store[i]) {
        this.store[i] = {
          card: nc.shift()?.name as CardKey,
          special: false,
        }
      }
    }
  }

  do_refresh() {
    this.$ref$Game.pool.drop(
      (this.store.filter(x => x !== null) as { card: CardKey }[]).map(
        c => CardData[c.card]
      )
    )
    this.store.fill(null)
    this.fill_store()
    this.post({
      msg: 'store-refreshed',
    })
  }

  obtain_resource(res: { mineral?: number; gas?: number }) {
    if (res.mineral) {
      this.mineral += res.mineral
    }
    if (res.gas) {
      this.gas = Math.min(this.gas + res.gas, this.gas_max)
    }
  }

  role_impl() {
    return RoleTable[this.role.name]
  }

  role_refresh_cost() {
    return this.role_impl().refresh_cost.call(this.role, this) || 1
  }

  role_refreshed() {
    this.role_impl().refreshed.call(this.role, this)
  }

  locate_combine_target(card: CardKey) {
    return this.present
      .filter(notNull)
      .map(c => c.card)
      .filter(c => c.name === card && c.color === 'normal')
      .slice(0, 2)
  }

  can_buy(card: CardKey, action: 'enter' | 'combine' | 'stage', place: number) {
    return (
      this.mineral >=
      this.role_impl().buy_cost.call(this.role, this, card, action, place)
    )
  }

  can_enter(card: CardKey) {
    const c = CardData[card]
    if (c.type === 'support') {
      return this.present.filter(x => x).length > 0
    } else {
      return this.present.filter(x => !x).length > 0
    }
  }

  can_combine(card: CardKey) {
    return this.locate_combine_target(card).length === 2
  }

  can_stage() {
    return this.hand.filter(x => !x).length > 0
  }

  can_pres_upgrade(card: CardInstance) {
    return card.upgrades.length < card.config.MaxUpgrade && this.gas >= 2
  }

  can_tavern_upgrade() {
    return this.level < 6 && this.mineral >= this.upgrade_cost
  }

  can_refresh() {
    return this.mineral >= this.role_impl().refresh_cost.call(this.role, this)
  }

  enter_insert(card: CardKey) {
    if (this.status !== 'normal') {
      return
    }
    this.status = 'insert'
    this.insertCard = card
  }

  enter_discover(
    item: DiscoverItem[],
    cfg?: {
      extra?: string
      fake?: boolean
      target?: number
      nodrop?: boolean
    }
  ) {
    if (this.status !== 'normal') {
      return
    }
    const id = uuidv4()
    this.status = 'discover'
    const ctx: DiscoverContext = {
      item,
      id,
    }
    if (cfg) {
      if (cfg.extra) {
        ctx.extra = cfg.extra
      }
      if (cfg.fake) {
        ctx.fake = cfg.fake
      }
      if (cfg.target) {
        ctx.target = cfg.target
      }
      if (cfg.nodrop) {
        ctx.nodrop = cfg.nodrop
      }
    }
    this.discoverItem = ctx
    return id
  }

  require_enter(card: CardKey) {
    const cd = CardData[card]
    if (this.config.AlwaysInsert || cd.attr.insert) {
      this.enter_insert(card)
    } else {
      this.enter(card)
    }
  }

  stage(card: CardKey) {
    this.hand[this.hand.findIndex(v => !v)] = {
      card,
    }
  }

  enter(card: CardKey, place = -1) {
    if (place === -1) {
      place = this.present.findIndex(x => !x)
      if (place === -1) {
        return false
      }
    }
    if (this.present[place]) {
      const rp = this.present.indexOf(null, place + 1)
      if (rp === -1) {
        const lp = this.present.lastIndexOf(null)
        this.present.splice(lp, 1)
        this.present.splice(place, 0, null)
      } else {
        this.present.splice(rp, 1)
        this.present.splice(place, 0, null)
      }
    }
    const cd = CardData[card]
    const ci = new CardInstance(this, cd)
    if (cd.attr.pool) {
      ci.occupy.push(card)
    }
    this.present[place] = {
      card: ci,
    }
    cd.desc
      .map((d, i) => `${card}${i}`)
      .forEach(d => {
        ci.add_desc(d)
      })

    this.post({
      msg: 'card-entered',
      target: place,
    })

    ci.post({
      msg: 'post-enter',
    })

    return ci
  }

  combine(card: CardKey) {
    const target = this.locate_combine_target(card)
    if (target.length < 2) {
      return false
    }

    const cd = CardData[card]
    const ci = new CardInstance(this, cd, false)
    ci.config = {
      MaxUnit: Math.max(target[0].config.MaxUnit, target[1].config.MaxUnit),
      MaxUpgrade: Math.max(
        target[0].config.MaxUpgrade,
        target[1].config.MaxUpgrade
      ),
    }
    ci.color = 'gold'
    ci.occupy = [...target[0].occupy, ...target[1].occupy]
    ci.units = [...target[0].units, ...target[1].units].slice(
      0,
      ci.config.MaxUnit
    )
    ci.upgrades = [
      ...target[0].upgrades,
      ...target[1].upgrades.filter(u => {
        return !target[0].upgrades.includes(u) || UpgradeData[u].override
      }),
    ]
    if (cd.attr.pool) {
      ci.occupy.push(card)
    }
    this.present[target[0].index()] = {
      card: ci,
    }
    this.present[target[1].index()] = null
    cd.desc
      .map((d, i) => `${card}${i}`)
      .forEach(d => {
        ci.add_desc(d)
      })

    this.post({
      msg: 'card-combined',
      target: ci.index(),
    })

    ci.post({
      msg: 'post-enter',
    })

    // TODO: reward

    return ci
  }

  sell(ci: CardInstance) {
    const pos = ci.index()
    this.present[pos] = null
    this.present.push({ card: ci })

    const doPostEffect = ci.level > 0 || ci.name === '虫卵'
    // const dark = ci.level >= 4 ? 2 : 1
    if (doPostEffect) {
      ci.post({
        msg: 'post-sell',
        pos,
      })
    }
    ci.clear_desc()
    this.$ref$Game.pool.drop(ci.occupy.map(c => CardData[c]))

    if (doPostEffect) {
      this.post({
        msg: 'card-selled',
        target: ci.index(), // 7, aka 6 + 1
        // really need pos?
      })
      this.obtain_resource({
        mineral: 1,
      })
      if (ci.name !== '虫卵') {
        // gain darkness
      }
    }

    this.present.pop()
  }
}
