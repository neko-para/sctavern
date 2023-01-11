import { RoleKey, CardKey, RoleData, CardData } from '@sctavern/data'
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
} from './types'
import { rep } from './utils'
import RoleTable from './role'
import { Attribute } from './attrib'

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
  /*
  $finish: function () {
    this.doned = true
    this.game.add_done()
  },
  $ability: function () {
    if (!this.ability.enable) {
      return
    }
    this.role.ability()
  },
  $lock: function () {
    this.locked = true
  },
  $unlock: function () {
    this.locked = false
  },
  $select: function ({ area, choice }) {
    this.selected = {
      area,
      choice,
    }
    this.postClient({
      msg: 'selected',
      area,
      choice,
    })
  },
  $choice: function ({ category, choice }) {
    const r = this.resolves[category]
    if (r) {
      this.resolves[category] = null
      r(choice)
    }
  },
  $action: function ({ area, action, choice }) {
    switch (area) {
      case 'store': {
        const ck = this.store[choice]
        if (!ck || !this.can_buy(ck, action, choice)) {
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
        this.mineral -= this.role.buy_cost(ck, action, choice)

        switch (action) {
          case 'enter':
            this.enter(getCard(ck))
            break
          case 'combine':
            this.combine(getCard(ck))
            break
          case 'stage':
            this.hand[this.hand.findIndex(v => v === null)] = ck
            break
        }

        this.store[choice] = null

        if (action !== 'combine') {
          this.role.bought(choice)
        }
        break
      }
      case 'hand': {
        const ck = this.hand[choice]
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

        this.hand[choice] = null

        switch (action) {
          case 'enter':
            this.enter(getCard(ck))
            break
          case 'combine':
            this.combine(getCard(ck))
            break
          case 'sell':
            if (getCard(ck).attr.type !== 'support') {
              this.obtain_resource({
                mineral: 1,
              })
            }
            break
        }
        break
      }
      case 'present': {
        const c = this.present[choice]
        if (!c) {
          return
        }
        switch (action) {
          case 'sell':
            this.sell(c)
            break
          case 'upgrade': {
            if (!this.can_pres_upgrade(c.data)) {
              return
            }

            if (c.data.upgrades.length >= this.config.MaxUpgradePerCard) {
              return
            }
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
            break
          }
        }
        break
      }
    }
  },
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

  role_refresh_cost() {
    return RoleTable[this.role.name].refresh_cost?.call(this.role, this) || 1
  }

  role_refreshed() {
    RoleTable[this.role.name].refreshed?.call(this.role, this)
  }
}
