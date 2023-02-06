import type { Unit } from './types'
import type { UnitKey } from './data'

export function elited(key: UnitKey): UnitKey {
  return `${key}(精英)` as UnitKey
}

export function isElited(key: UnitKey): boolean {
  return key.endsWith('(精英)')
}

export function canElite(units: UnitKey[], key: UnitKey): boolean {
  return units.includes(elited(key))
}

export function royalized(key: UnitKey): UnitKey {
  return `${key}(皇家卫队)` as UnitKey
}

export function isRoyalized(key: UnitKey): boolean {
  return key.endsWith('(皇家卫队)')
}

export function canRoyalize(units: UnitKey[], key: UnitKey): boolean {
  return units.includes(royalized(key))
}

export function isNormal(unit: Unit): boolean {
  return unit.type === 'normal'
}

export function isSpecialUnit(unit: Unit): boolean {
  return unit.type === 'special unit'
}

export function isSpecialStructure(unit: Unit): boolean {
  return unit.type === 'special structure'
}
