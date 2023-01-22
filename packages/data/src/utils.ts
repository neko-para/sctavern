import { Unit } from './types'
import { AllUnit, UnitKey } from './unit'

export function elited(key: UnitKey): UnitKey {
  return `${key}(精英)` as UnitKey
}

export function canElite(key: UnitKey): boolean {
  return AllUnit.includes(elited(key))
}

export function royalized(key: UnitKey): UnitKey {
  return `${key}(皇家卫队)` as UnitKey
}

export function canRoyalize(key: UnitKey): boolean {
  return AllUnit.includes(royalized(key))
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