import { CardKey } from './card'
import { MutationKey } from './mutation'
import { PackKey } from './pack'
import { ProphesyKey } from './prophesy'
import { RoleKey } from './role'
import { UnitKey } from './unit'
import { UpgradeKey } from './upgrade'

export type Race = 'T' | 'Z' | 'P' | 'N'

export type UpgradeCategory =
  | 'special'
  | 'combine'
  | 'terran'
  | 'zerg'
  | 'protoss'
  | 'public'
  | 'virtual'
  | 'primal'

export type CardBelong = 'none' | 'primal' | 'virtual'

export type UnitType = 'normal' | 'special unit' | 'special structure'

export type CardType = 'normal' | 'structure' | 'support'

export const enum UnitTag {
  Light = 'light', // 轻甲
  Armored = 'armored', // 重甲
  Biological = 'biological', // 生物
  Mechanical = 'mechanical', // 机械
  Massive = 'massive', // 重型
  Heroic = 'heroic', // 英雄
  Structure = 'structure', // 建筑
  Psionic = 'psionic', // 灵能
  Summoned = 'summoned', // 召唤
  Air = 'air', // 空中单位
}

export interface Unit {
  name: UnitKey
  pinyin: string
  race: Race
  value: number

  type: UnitType
  tag: {
    [tag in UnitTag]?: true
  }

  health: number
  shield?: number
}

export interface Card {
  name: CardKey
  pinyin: string
  race: Race
  level: number
  pack: PackKey
  unit: {
    [key in UnitKey]?: number
  }
  attr: {
    amber?: true
    gold?: true
    insert?: true
  }
  belong: CardBelong
  type: CardType

  desc: [string, string][]
}

export interface Upgrade {
  name: UpgradeKey
  pinyin: string
  override: boolean
  category: UpgradeCategory
}

export interface Role {
  name: RoleKey
  pinyin: string
  ability: string
  desc: string
  ext?: true
}

export interface Mutation {
  name: MutationKey
  pinyin: string
  prevent?: RoleKey
}

export interface Prophesy {
  name: ProphesyKey
  pinyin: string
  type: RoleKey | 0 | 1 | 2
  desc: string
  unique?: true
}

export type Difficulty = '普通' | '困难' | '残酷' | '折磨'
