import type {
  MutationKey,
  RoleKey,
  Pack,
  CardKey,
  Race,
  UnitKey,
  UpgradeKey,
  CardBelong,
  Card,
  Upgrade,
} from '@sctavern/data'
import { CardInstance } from './card'
import { InnerMsg, SpecificListener } from './events'
import { PlayerInstance } from './player'

export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never

interface Action {
  enable: boolean
  msg: InnerMsg
}

export interface GlobalAction extends Action {
  action: 'upgrade' | 'refresh' | 'lock' | 'unlock' | 'finish' | 'ability'
}

export interface StoreAction extends Action {
  action: 'enter' | 'combine' | 'stage'
  enable: boolean
}

export interface HandAction extends Action {
  action: 'enter' | 'combine' | 'sell'
  enable: boolean
}

export interface PresentAction extends Action {
  action: 'sell' | 'upgrade' | 'insert' | 'deploy'
  enable: boolean
}

export type PlayerStatus =
  | 'middle'
  | 'normal'
  | 'finish'
  | 'discover'
  | 'insert'
  | 'deploy'
  | 'die'

export type GameArea = 'none' | 'hand' | 'store' | 'present'

export type ObtainUnitWay = 'normal' | 'incubate' | 'wrap'

export interface GameConfig {
  Pack: Pack[]
  Seed: number
  Role: RoleKey[]
  Mutation: MutationKey[]
}

export interface PlayerConfig {
  MaxUnitPerCard: number
  MaxUpgradePerCard: number

  AlwaysInsert: boolean
  AlwaysIncubate: boolean

  ZergEggCount: number
  ZergEggCard: CardKey

  StoreCount: number[]
  TavernUpgrade: number[]

  MaxMineral: number
  MaxGas: number
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
      type: 'custom'
      str: string
    }

export interface DiscoverContext {
  item: DiscoverItem[]
  id: number
  choice?: number
  extra?: string
  fake?: boolean
  target?: number
  nodrop?: boolean
}

export interface GameState {
  config: GameConfig

  round: number

  player: ({
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
    }

    action: GlobalAction[]
    store: ({
      card: CardKey
      special: boolean
      actions: StoreAction[]
    } | null)[]
    hand: ({
      card: CardKey
      actions: HandAction[]
    } | null)[]
    present: {
      card: {
        config: CardConfig

        name: string
        race: Race
        level: number
        color: 'normal' | 'amber' | 'gold'
        belong: CardBelong

        units: UnitKey[]
        upgrades: UpgradeKey[]
        descs: string[]
        notes: string[]

        value: number
      } | null
      actions: PresentAction[]
    }[]
  } | null)[]
}

export interface Descriptor {
  config?: {
    unique?: 'normal' | 'left' // 优先金卡 / 优先左卡
    uniqueDisabled?: (ci: CardInstance) => boolean // 允许禁用唯一词条, 用于光复
    init?: Record<string, [number, number]>
    deinit?: Record<string, [number, number]>
  }

  listener: SpecificListener<CardInstance, Descriptor>
  text?: [string, string]
  note?: (card: CardInstance, active: boolean) => string[]
}

export interface RoleInstance {
  attrib: Record<string, number>

  name: RoleKey
  enable: boolean

  progress: {
    cur: number
    max: number
  } | null
  enhance: boolean
}

export interface RoleImpl {
  listener: SpecificListener<PlayerInstance, RoleInstance>

  refresh_cost: (this: RoleInstance, player: PlayerInstance) => number
  refreshed: (this: RoleInstance, player: PlayerInstance) => void

  buy_cost: (
    this: RoleInstance,
    player: PlayerInstance,
    card: CardKey,
    act: 'enter' | 'combine' | 'stage',
    place: number
  ) => number
  bought: (
    this: RoleInstance,
    player: PlayerInstance,
    card: CardKey,
    act: 'enter' | 'combine' | 'stage',
    place: number
  ) => void

  ability: (this: RoleInstance, player: PlayerInstance) => void
}
