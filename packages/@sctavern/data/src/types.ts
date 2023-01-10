import { RoleKey } from './role'
import { UnitKey } from './unit'

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

export type Pack =
  | '核心'
  | '天空之怒'
  | '并肩作战'
  | '拉克希尔'
  | '短兵相接'
  | '快速启动'
  | '独辟蹊径'
  | '军备竞赛'

export type CardBelong = 'none' | 'primal' | 'dark' | 'virtual'

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
  pinyin: string
  race: Race
  level: number
  pack: Pack
  unit: {
    [key in UnitKey]?: number
  }
  attr: {
    pool?: true
    rare?: true
    darkgold?: true
    insert?: true
  }
  belong: CardBelong
  type: CardType

  desc: [string, string][]

  banner?: string
}

export interface Upgrade {
  pinyin: string
  override: boolean
  category: UpgradeCategory
}

export interface Role {
  pinyin: string
  ability: string
  desc: string
  ext?: true
}

export interface Mutation {
  pinyin: string
  prevent?: RoleKey
}
