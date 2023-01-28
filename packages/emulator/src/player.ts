import {
  RoleKey,
  CardKey,
  CardData,
  UpgradeData,
  Card,
  Race,
  AllUpgrade,
  UnitKey,
  Upgrade,
  AllProphesy,
  ProphesyData,
  ProphesyKey,
  UnitData,
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
import { notNull, repX } from './utils'
import DescriptorTable from './descriptor'
import RoleTable from './role'
import ProphesyTable from './prophesy'
import { Attribute } from './attrib'

const playerBind: GenericListener<PlayerInstance> = {
  $upgrade() {
    if (this.level < 6 && this.mineral >= this.upgrade_cost) {
      this.mineral -= this.upgrade_cost
      this.do_tavern_upgrade()
    }
  },
  $refresh() {
    if (this.mineral < this.get_refresh_cost()) {
      return
    }
    // 这里不能直接一行写, 由于存在副官2预言这种刷新时获得晶体矿的情况, 会数据错误
    const cost = this.get_refresh_cost('real')
    this.mineral -= cost
    this.do_refresh()
  },
  $finish() {
    if (this.curStatus() === 'normal') {
      // TODO: Notify game
      this.$ref$Game.roundEnd()
    }
  },
  $ability() {
    if (!this.role.enable) {
      return
    }
    this.role_impl().ability.call(this.role, this)
  },
  $lock() {
    this.locked = true
  },
  $unlock() {
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
      case 'insert': {
        const card = this.insertCard.shift()
        if (!card) {
          return
        }
        this.status.pop()
        this.enter(card, place)
        break
      }
      case 'discover': {
        const ctx = this.discoverItem.shift()
        if (!ctx) {
          return
        }
        this.status.pop()
        const drop: Card[] = []
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
              this.obtain_card(result.card.name, !ctx.nodrop)
            } else if (result.type === 'upgrade') {
              if ('target' in ctx) {
                const ci = this.present[ctx.target as number]?.card
                if (ci && this.can_obt_upgrade(ci)) {
                  ci.obtain_upgrade(result.upgrade.name)
                }
              }
            } else if (result.type === 'prophesy') {
              if (
                result.prophesy.unique &&
                this.prophesy.includes(result.prophesy.name)
              ) {
                return
              }
              const p = ProphesyTable[result.prophesy.name]
              p.init.call(this)
              this.prophesy.push(result.prophesy.name)
            }
          }
        }
        this.$ref$Game.pool.drop(drop)
        ctx.choice = place
        this.post({
          msg: 'discover-finish',
          ctx,
        })
        break
      }
      default:
        return
    }
  },
  'discover-finish'({ ctx }) {
    if (ctx.id === this.attrib.get('upgrade-discover-id', -1)) {
      this.attrib.set('upgrade-discover-id', -1)
      if (ctx.choice === -1) {
        this.obtain_resource({
          gas: 1,
        })
        this.post({
          msg: 'upgrade-cancelled',
          target: this.present[ctx.target || 0]?.card as CardInstance,
        })
      }
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
        this.do_buy(ck, action, place)
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

        this.post({
          msg: 'bought',
          action,
          cardt: ck,
          place,
        })
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
            const comm: Upgrade[] = []
            const spec: Upgrade[] = []
            AllUpgrade.filter(u => !c.upgrades.includes(u))
              .map(u => UpgradeData[u])
              .forEach(u => {
                switch (u.category) {
                  case 'primal':
                  case 'virtual':
                    if (c.belong === u.category) {
                      spec.push(u)
                    }
                    break
                  case 'terran':
                    if (c.race === 'T') {
                      spec.push(u)
                    }
                    break
                  case 'zerg':
                    if (c.race === 'Z') {
                      spec.push(u)
                    }
                    break
                  case 'protoss':
                    if (c.race === 'P') {
                      spec.push(u)
                    }
                    break
                  case 'public':
                    comm.push(u)
                    break
                }
              })
            this.$ref$Game.lcg.shuffle(spec)
            const firstUpgrade = c.upgrades.length === 0
            const sp = spec.slice(
              0,
              firstUpgrade ? (c.belong === 'primal' ? 3 : 2) : 1
            )
            const item = this.$ref$Game.lcg
              .shuffle(comm)
              .slice(0, 4 - sp.length)
              .concat(sp)
            this.obtain_resource({
              gas: -2,
            })

            const id = this.push_discover(
              item.map(u => ({
                type: 'upgrade',
                upgrade: u,
              })),
              {
                extra: '放弃',
                target: c.index(),
              }
            )
            if (typeof id === 'number') {
              this.attrib.set('upgrade-discover-id', id)
            }
            break
          }
        }
        break
      }
    }
  },
  $cheat: function (msg) {
    switch (msg.type) {
      case 'card':
        if (!this.can_stage()) {
          return
        }
        this.stage(msg.cardt)
        break
      case 'unit':
        if (!this.present[msg.place]) {
          return
        }
        this.present[msg.place]?.card.obtain_unit(msg.units)
        break
      case 'resource':
        this.obtain_resource({
          mineral: 100,
          gas: 100,
        })
        break
    }
  },

  'round-start'() {
    if (this.curStatus() !== 'middle') {
      return
    }
    this.status.push('normal')
    this.attrib = this.nextAttrib
    this.nextAttrib = new Attribute()
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
  'round-enter'({ round }) {
    if (this.$ref$Game.config.Pve) {
      if (round === 1) {
        if (this.role.name !== '白板') {
          this.push_discover(
            AllProphesy.map(p => ProphesyData[p])
              .filter(p => p.type === this.role.name)
              .map(prophesy => ({
                type: 'prophesy',
                prophesy,
              }))
          )
        }
      } else if (round === 4) {
        this.push_discover(
          this.$ref$Game.lcg
            .shuffle(
              AllProphesy.map(p => ProphesyData[p]).filter(p => p.type === 0)
            )
            .slice(0, 4)
            .map(prophesy => ({
              type: 'prophesy',
              prophesy,
            }))
        )
      } else if (round === 8) {
        this.push_discover(
          this.$ref$Game.lcg
            .shuffle(
              AllProphesy.map(p => ProphesyData[p]).filter(p => p.type === 1)
            )
            .slice(0, 4)
            .map(prophesy => ({
              type: 'prophesy',
              prophesy,
            }))
        )
      } else if (round === 12) {
        this.push_discover(
          this.$ref$Game.lcg
            .shuffle(
              AllProphesy.map(p => ProphesyData[p]).filter(p => p.type === 2)
            )
            .slice(0, 4)
            .map(prophesy => ({
              type: 'prophesy',
              prophesy,
            }))
        )
      }
    }
  },
  'round-leave'() {
    if (this.curStatus() !== 'normal') {
      return
    }
    this.status.pop()
  },
}

export class PlayerInstance {
  $ref$Game: GameInstance
  config: PlayerConfig
  attrib: Attribute
  nextAttrib: Attribute
  persisAttrib: Attribute

  life: number
  level: number
  upgrade_cost: number

  status: PlayerStatus[]

  insertCard: CardKey[]
  deployCard: CardKey[]
  discoverItem: DiscoverContext[]

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
  prophesy: ProphesyKey[]

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
  process: CardInstance | null

  constructor(game: GameInstance, rolekey: RoleKey) {
    this.$ref$Game = game
    this.config = {
      MaxUnitPerCard: 200,
      MaxUpgradePerCard: 5,

      AlwaysInsert: false,
      AlwaysIncubate: false,

      ZergEggCount: 1,
      ZergEggCard: '虫卵',
      ZergEggRestrictBiological: true,
      ZergIncubateRestrictBiological: true,

      BuyResource: 'mineral',

      StoreCount: [0, 3, 4, 4, 5, 5, 6],
      TavernUpgrade: [0, 5, 7, 8, 9, 11, 0],

      MaxMineral: 10,
      MaxGas: 6,
    }
    this.attrib = new Attribute()
    this.nextAttrib = new Attribute()
    this.persisAttrib = new Attribute()

    this.life = 100
    this.level = 1
    this.upgrade_cost = 5 + 1

    this.status = ['middle']
    this.insertCard = []
    this.deployCard = []
    this.discoverItem = []

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
      enable: false,

      progress: {
        cur: -1,
        max: -1,
      },
      enhance: true,
    }
    this.prophesy = []

    this.store = repX(null, 3)
    this.hand = repX(null, 6)
    this.present = repX(null, 7)
    this.process = null

    this.set_role(rolekey)
  }

  curStatus(): PlayerStatus {
    return this.status[this.status.length - 1]
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

    this.prophesy.forEach(p => {
      Dispatch(ProphesyTable[p].listener, msg, this)
    })

    Dispatch(this.role_impl().listener, msg, this.role, this)

    if ('card' in msg) {
      if (msg.card === -1) {
        this.process?.answer(msg)
      } else {
        this.present[msg.card]?.card.answer(msg)
      }
    } else {
      this.present.forEach(p => {
        if (p) {
          p.card.answer(msg)
        }
      })
    }
  }

  check_unique_active(key: string, place: number) {
    const d = DescriptorTable[key]
    if (d.config?.unique) {
      let pre = (
        this.present
          .map((c, i) => ({
            card: c?.card || null,
            pos: i,
          }))
          .filter(c => c.card) as { card: CardInstance; pos: number }[]
      ).filter(c => c.card.descs.includes(key))
      if (d.config.uniqueDisabled) {
        pre = pre.filter(c => d.config?.uniqueDisabled?.(c.card))
      }
      if (d.config.unique === 'normal') {
        const cp = {
          normal: 1,
          amber: 1,
          gold: 0,
        }
        pre.sort((a, b) => {
          if (cp[a.card.color] !== cp[b.card.color]) {
            return cp[a.card.color] - cp[b.card.color]
          } else {
            return a.pos - b.pos
          }
        })
      }
      return pre.length > 0 && pre[0].pos === place
    } else {
      return true
    }
  }

  all() {
    return this.present.filter(notNull).map(c => c.card)
  }

  all_of(race: Race) {
    return this.all().filter(c => c.race === race)
  }

  count(): Record<Race, number> {
    const res: Record<Race, number> = {
      T: 0,
      P: 0,
      Z: 0,
      N: 0,
    }
    this.all().forEach(ci => {
      res[ci.race] += 1
    })
    return res
  }

  fill_store(spec?: (req: number) => Card[] | null) {
    const nf = this.store.filter(c => !c).length
    const nc = spec
      ? spec(nf)
      : this.$ref$Game.pool.discover(
          card => card.level <= this.level,
          nf,
          false
        )
    if (!nc) {
      return
    }
    for (let i = 0; i < this.store.length; i++) {
      if (!this.store[i]) {
        this.store[i] = {
          card: nc.shift()?.name as CardKey,
          special: false,
        }
      }
    }
  }

  do_tavern_upgrade() {
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

  do_refresh(spec?: (req: number) => Card[] | null) {
    this.$ref$Game.pool.drop(
      (this.store.filter(x => x !== null) as { card: CardKey }[]).map(
        c => CardData[c.card]
      )
    )
    this.store.fill(null)
    this.fill_store(spec)
    this.post({
      msg: 'refreshed',
    })
    this.post({
      msg: 'store-refreshed',
    })
  }

  set_role(role: RoleKey, keepAttrib = false) {
    this.role = {
      attrib: keepAttrib ? this.role.attrib : {},

      name: role,
      enable: false,

      progress: {
        cur: -1,
        max: -1,
      },
      enhance: true,
    }

    this.role_impl().init.call(this.role, this)
  }

  query_selected_present() {
    return this.selected.area === 'present'
      ? this.present[this.selected.place]?.card || null
      : null
  }

  obtain_card(card: CardKey, drop = true) {
    if (this.can_stage()) {
      this.stage(card)
    } else if (this.can_combine(card)) {
      this.combine(card)
    } else if (this.can_enter(card)) {
      this.require_enter(card)
    } else {
      if (drop) {
        this.$ref$Game.pool.drop([CardData[card]])
      }
    }
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

  locate_combine_target(card: CardKey) {
    return this.present
      .filter(notNull)
      .map(c => c.card)
      .filter(c => c.name === card && c.color === 'normal')
      .slice(0, 2)
  }

  can_buy(card: CardKey, action: 'enter' | 'combine' | 'stage', place: number) {
    const cost = this.get_buy_cost(action, card, place)
    switch (this.config.BuyResource) {
      case 'mineral':
        return this.mineral >= cost
      case 'life':
        return this.life > cost
    }
  }

  do_buy(card: CardKey, action: 'enter' | 'combine' | 'stage', place: number) {
    const cost = this.get_buy_cost(action, card, place, 'real')
    switch (this.config.BuyResource) {
      case 'mineral':
        this.obtain_resource({
          mineral: -cost,
        })
        break
      case 'life':
        this.life -= cost
        break
    }
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

  can_obt_upgrade(card: CardInstance) {
    return card.upgrades.length < card.config.MaxUpgrade
  }

  can_pres_upgrade(card: CardInstance) {
    return this.can_obt_upgrade(card) && this.gas >= 2
  }

  can_tavern_upgrade() {
    return this.level < 6 && this.mineral >= this.upgrade_cost
  }

  can_refresh() {
    return this.mineral >= this.get_refresh_cost()
  }

  push_insert(card: CardKey) {
    this.status.push('insert')
    this.insertCard.push(card)
  }

  push_discover(
    item?: DiscoverItem[],
    cfg?: {
      extra?: string
      fake?: boolean
      target?: number
      nodrop?: boolean
    }
  ) {
    if (!item) {
      return ''
    }
    const id = this.persisAttrib.get('discover-counter')
    this.persisAttrib.alter('discover-counter', 1)
    this.status.push('discover')
    const ctx: DiscoverContext = {
      item,
      id,
      ...cfg,
    }
    this.discoverItem.push(ctx)
    return id
  }

  require_enter(card: CardKey) {
    const cd = CardData[card]
    if (this.config.AlwaysInsert || cd.attr.insert) {
      this.push_insert(card)
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
    if (this.$ref$Game.config.PoolPack.includes(cd.pack)) {
      ci.occupy.push(card)
    }
    this.present[place] = {
      card: ci,
    }
    ci.load_desc(cd)

    this.post({
      msg: 'card-entered',
      target: ci,
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
    ci.attrib.load(target[0].attrib, ['task'])
    ci.attrib.load(target[1].attrib, ['task'])
    const i1 = target[0].infr()
    const i2 = target[1].infr()
    if (ci.race === 'T' && i1 && i2) {
      if (i2 === '高级科技实验室') {
        ci.units = [
          ...target[0].units.filter(
            u => !['反应堆', '科技实验室', '高级科技实验室'].includes(u),
            ...target[1].units
          ),
        ]
      } else {
        ci.units = [
          ...target[0].units,
          ...target[1].units.filter(
            u => !['反应堆', '科技实验室', '高级科技实验室'].includes(u)
          ),
        ]
      }
    } else {
      ci.units = [...target[0].units, ...target[1].units]
    }
    ci.units = ci.units.slice(0, ci.config.MaxUnit)
    ci.upgrades = [
      ...target[0].upgrades,
      ...target[1].upgrades.filter(u => {
        return !target[0].upgrades.includes(u) || UpgradeData[u].override
      }),
    ]
    if (this.$ref$Game.config.PoolPack.includes(cd.pack)) {
      ci.occupy.push(card)
    }
    this.present[target[0].index()] = {
      card: ci,
    }
    this.present[target[1].index()] = null
    ci.load_desc(cd)

    this.post({
      msg: 'card-combined',
      target: ci,
    })

    ci.post({
      msg: 'post-enter',
    })

    const reward: DiscoverItem[] | undefined = this.$ref$Game.pool
      .discover(c => c.level === Math.min(6, this.level + 1), 3)
      ?.map(c => ({
        type: 'card',
        card: c,
      }))

    if (ci.upgrades.length < ci.config.MaxUpgrade) {
      const us = AllUpgrade.map(u => UpgradeData[u])
        .filter(u => u.category === 'combine')
        .filter(u => !ci.upgrades.includes(u.name))
      if (us.length > 0) {
        reward?.push({
          type: 'upgrade',
          upgrade: this.$ref$Game.lcg.shuffle(us)[0],
        })
      }
    }

    this.push_discover(reward, {
      target: ci.index(),
    })

    return ci
  }

  sell(ci: CardInstance) {
    const pos = ci.index()
    ci.attrib.set('oldpos', pos)
    this.present[pos] = null
    this.process = ci

    const doPostEffect =
      ci.level > 0 || ci.name === '虫卵' || ci.name === '被感染的虫卵'
    const dark = ci.level >= 4 ? 2 : 1
    if (doPostEffect) {
      ci.post({
        msg: 'post-sell',
      })
    }
    ci.clear_desc()
    this.$ref$Game.pool.drop(ci.occupy.map(c => CardData[c]))

    if (doPostEffect) {
      this.post({
        msg: 'card-selled',
        target: ci,
      })
      this.obtain_resource({
        mineral: 1,
      })
      if (ci.name !== '虫卵') {
        ci.around(pos).forEach(c => {
          c.gain_darkness(dark)
        })
      }
    }

    this.process = null
  }

  destroy(ci: CardInstance) {
    const pos = ci.index()
    ci.attrib.set('oldpos', pos)
    this.present[pos] = null
    this.process = ci

    const doPostEffect = ci.level > 0
    const dark = ci.level >= 4 ? 2 : 1
    ci.clear_desc()
    this.$ref$Game.pool.drop(ci.occupy.map(c => CardData[c]))

    if (doPostEffect) {
      ci.around(pos).forEach(c => {
        c.gain_darkness(dark)
      })
    }

    this.process = null
  }

  hatch(from: CardInstance, units: UnitKey[]) {
    if (this.config.ZergIncubateRestrictBiological) {
      units = units.filter(u => UnitData[u].tag.biological)
    }
    if (units.length === 0) {
      return
    }
    const m = this.post({
      msg: 'hatch',
      from: from,
      units,
    })
    from.around(from.attrib.get('oldpos', -1)).forEach(ci => {
      if (ci.race === 'Z' || this.config.AlwaysIncubate) {
        ci.obtain_unit(m.units, 'hatch')
      }
    })
  }

  inject(units: UnitKey[], into: 'all' | 'left' = 'all') {
    if (units.length === 0) {
      return
    }

    const eggs = this.present
      .filter(notNull)
      .map(c => c.card)
      .filter(c => c.name === '虫卵')

    while (eggs.length < this.config.ZergEggCount) {
      const egg = this.enter(this.config.ZergEggCard)
      if (!egg) {
        break
      }
      egg.color = 'gold'
      eggs.push(egg)
    }
    eggs.sort((a, b) => a.index() - b.index())
    if (eggs.length > 0) {
      if (into === 'left') {
        eggs[0].obtain_unit(units)
      } else {
        eggs.forEach(e => {
          e.obtain_unit(units)
        })
      }
      this.post({
        msg: 'inject',
        units,
      })
    }
  }

  warp(units: UnitKey[]) {
    if (units.length === 0) {
      return
    }
    const m = this.post({
      msg: 'warp',
      units,
      into: null as CardInstance | null,
    })
    if (m.into === null) {
      const targets = this.all_of('P')
      if (!targets.length) {
        return
      }
      this.$ref$Game.lcg.shuffle(targets)
      m.into = targets[0]
    }
    if (m.into) {
      m.into.obtain_unit(units, 'warp')
    }
  }

  get_buy_cost(
    action: 'enter' | 'combine' | 'stage',
    cardt: CardKey,
    place: number,
    time: 'dry' | 'real' = 'dry'
  ) {
    return this.post({
      msg: 'get-buy-cost',
      time,
      cost: 3,
      action,
      cardt,
      place,
    }).cost
  }

  get_refresh_cost(time: 'dry' | 'real' = 'dry') {
    return this.post({
      msg: 'get-refresh-cost',
      time,
      cost: 1,
    }).cost
  }

  get_extra_void() {
    return this.post({
      msg: 'get-extra-void',
      void: 0,
    }).void
  }
}
