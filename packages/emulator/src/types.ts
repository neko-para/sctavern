import type {
  MutationKey,
  RoleKey,
  PackKey,
  CardKey,
  Race,
  UnitKey,
  UpgradeKey,
  CardBelong,
  Card,
  Upgrade,
  Prophesy,
} from '@sctavern/data'
import type { CardInstance } from './card'
import type { GenericListener, InnerMsg, SpecificListener } from './events'
import type { PlayerInstance } from './player'

export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never

interface Action {
  enable: boolean
  msg: InnerMsg
}

export interface GlobalAction extends Action {
  action: 'upgrade' | 'refresh' | 'lock' | 'unlock' | 'finish'
  special?: boolean
}

export interface AbilityAction extends Action {}

export interface StoreAction extends Action {
  action: 'enter' | 'combine' | 'stage'
  enable: boolean
  acckey: 'e' | 'v'
}

export interface HandAction extends Action {
  action: 'enter' | 'combine' | 'sell'
  enable: boolean
  acckey: 'e' | 's'
}

export interface PresentAction extends Action {
  action: 'sell' | 'upgrade' | 'insert' | 'deploy'
  enable: boolean
  acckey: 's' | 'g' | 'x'
}

export type GameStatus = 'select' | 'store' | 'battle' | 'finish'

export type PlayerStatus =
  | 'middle'
  | 'normal'
  | 'discover'
  | 'insert'
  | 'deploy'
  | 'die'

export type GameArea = 'none' | 'hand' | 'store' | 'present'

export type ObtainUnitWay = 'normal' | 'hatch' | 'warp'

export interface GameConfig {
  Pack: PackKey[]
  Seed: number
  Role: RoleKey[][]
  Mutation: MutationKey[]

  Pve: boolean
  PoolPack: PackKey[]
  ActivePack: PackKey[]
  ActiveUnit: UnitKey[]
}

export interface PlayerConfig {
  MaxUnitPerCard: number
  MaxUpgradePerCard: number

  AlwaysInsert: boolean
  AlwaysHatch: boolean

  ZergEggCount: number
  ZergEggCard: CardKey
  ZergEggRestrictBiological: boolean
  ZergHatchRestrictBiological: boolean

  ProtossPowerMultiplier: number
  ProtossPowerAll: boolean

  BuyResource: 'mineral' | 'life'
  CombineRequire: number

  StoreCount: number[]
  TavernUpgrade: number[]

  MaxMineral: number
  MineralLimitDelta: number
  MaxGas: number

  RefreshDisabled: boolean
}

export interface CardConfig {
  MaxUnit: number
  MaxUpgrade: number
}

export type DiscoverItem =
  | {
      type: 'card'
      card: Card
    }
  | {
      type: 'upgrade'
      upgrade: Upgrade
    }
  | {
      type: 'prophesy'
      prophesy: Prophesy
    }
  | {
      type: 'custom'
      str: string
    }

export type InsertContext =
  | {
      id: number
      fake: true
    }
  | {
      id: number
      fake: false
      card: CardKey
    }

export type CounterTarget = {
  type: 'Player' | 'AI' | 'Amon'
  index: number
}

export interface DiscoverContext {
  item: DiscoverItem[]
  id: number
  extra?: string
  fake?: boolean
  target?: number
  nodrop?: boolean
  dropall?: boolean
  data?: unknown
}

export interface GameState {
  config: GameConfig

  round: number

  endProgress: {
    current: number
    require: number
  }

  status: GameStatus

  player: (PlayerState | null)[]
}

export interface HandItemState {
  card: CardKey
  actions: HandAction[]
}

export interface StoreItemState {
  card: CardKey
  special: boolean
  actions: StoreAction[]
}

export interface PresentItemState {
  card: {
    config: CardConfig

    name: string
    race: Race
    level: number
    color: 'normal' | 'amber' | 'red' | 'gold'
    belong: CardBelong

    units: UnitKey[]
    upgrades: UpgradeKey[]
    descs: string[]
    notes: string[]

    value: number
  } | null
  actions: PresentAction[]
}

export interface RoleState {
  name: RoleKey
  ability: string
  desc: string
  enable: boolean

  progress: {
    cur: number
    max: number
  } | null
  enhance: boolean
  record: unknown | null
}

export interface PlayerState {
  config: PlayerConfig

  life: number
  level: number
  upgrade_cost: number

  value: number
  // battleValue: number
  target: CounterTarget
  battle_units: BattleUnit[]

  status: PlayerStatus

  discover: null | DiscoverContext

  mineral: number
  mineral_max: number
  gas: number
  gas_max: number

  selected: {
    area: GameArea
    place: number
  }
  locked: boolean

  roles: RoleState[]

  action: GlobalAction[]
  abilityAction: AbilityAction[]
  store: (StoreItemState | null)[]
  hand: (HandItemState | null)[]
  present: PresentItemState[]

  prophesy: Record<PropertyKey, number | null>
}

export interface Descriptor {
  refer?: string // ??????
  config?: {
    unique?: 'normal' | 'left' // ???????????? / ????????????
    uniqueDisabled?: (ci: CardInstance) => boolean // ????????????????????????, ????????????
    init?: Record<string, [number, number]>
    deinit?: Record<string, [number, number]>
  }

  listener?: SpecificListener<CardInstance, string[]>
  text?: [string, string] | ((extra: string[]) => [string, string])
  note?: (card: CardInstance, active: boolean) => string[]
}

export interface RoleInstance {
  attrib: Record<string, number>

  name: RoleKey
  enable: boolean

  progress: {
    cur: number
    max: number
  }
  enhance: boolean
  record: unknown | null
}

export interface RoleImpl {
  init: (this: RoleInstance, player: PlayerInstance) => void

  listener: SpecificListener<RoleInstance, PlayerInstance>

  ability: (this: RoleInstance, player: PlayerInstance) => void

  record: (this: RoleInstance) => string[]
}

export interface RoleProphesyImpl {
  init: (this: RoleInstance, player: PlayerInstance) => void

  listener: SpecificListener<RoleInstance, PlayerInstance>

  count?: (this: RoleInstance, player: PlayerInstance) => number
}

export interface ProphesyImpl {
  init: (this: PlayerInstance) => void

  listener: GenericListener<PlayerInstance>

  count?: (this: PlayerInstance) => number
}

export type ExtraUpgradeKey = '????????????' | '??????'

export interface BattleUnit {
  unit: UnitKey
  upgrades: UpgradeKey[]
  extraUpgrades: Partial<Record<ExtraUpgradeKey, number>>
}
