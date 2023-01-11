import type {
  MutationKey,
  RoleKey,
  Pack,
  CardKey,
  Race,
  UnitKey,
  UpgradeKey,
  CardBelong,
} from '@sctavern/data'
import { CardInstance } from './card'
import { SpecificListener } from './events'
import { PlayerInstance } from './player'

export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never

export interface Action {
  name: string
  accelerator: string
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

  StoreCount: number[]
  TavernUpgrade: number[]

  MaxMineral: number
  MaxGas: number
}

export interface CardConfig {
  MaxUnit: number
  MaxUpgrade: number
}

export interface ClientViewData {
  config: GameConfig

  round: number

  player: ({
    config: PlayerConfig

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

    store: ({
      card: CardKey
      special: boolean
      actions: Action[]
    } | null)[]
    hand: ({
      card: CardKey
      actions: Action[]
    } | null)[]
    present: ({
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
      }
      actions: Action[]
    } | null)[]
  } | null)[]
}

export interface Descriptor {
  config?: {
    unique?: 'normal' | 'left' // 优先金卡 / 优先左卡
    init?: Record<string, [number, number]>
    deinit?: Record<string, [number, number]>
  }

  listener: SpecificListener<CardInstance, Descriptor>
  text?: [string, string]
  note?: (card: CardInstance) => string[]
}

export interface RoleInstance {
  attrib: Record<string, number>

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

export interface RoleImpl {
  listener: SpecificListener<PlayerInstance, RoleInstance>

  refresh_cost?: (this: RoleInstance, player: PlayerInstance) => number
  refreshed?: (this: RoleInstance, player: PlayerInstance) => void
}
