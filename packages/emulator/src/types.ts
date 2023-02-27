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
  Role: RoleKey[]
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

export interface PlayerState {
  config: PlayerConfig

  life: number
  level: number
  upgrade_cost: number

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

  role: {
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

  action: GlobalAction[]
  abilityAction: AbilityAction
  store: (StoreItemState | null)[]
  hand: (HandItemState | null)[]
  present: PresentItemState[]

  prophesy: Record<PropertyKey, number | null>
}

export interface Descriptor {
  refer?: string // 替换
  config?: {
    unique?: 'normal' | 'left' // 优先金卡 / 优先左卡
    uniqueDisabled?: (ci: CardInstance) => boolean // 允许禁用唯一词条, 用于光复
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

export interface ProphesyImpl {
  init: (this: PlayerInstance) => void

  listener: GenericListener<PlayerInstance>

  count?: (this: PlayerInstance) => number
}
