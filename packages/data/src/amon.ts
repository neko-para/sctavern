import { RoleKey } from './role'
import { Difficulty } from './types'
import { UnitKey } from './unit'
import { UpgradeKey } from './upgrade'

export function rep(v: UnitKey, n: number) {
  return Array.from({ length: n }, () => v)
}

export const Amon: {
  [key in string]?: {
    [diff in Difficulty]?: {
      units: UnitKey[]
      upgrades?: UpgradeKey[]
    }
  }
} = {
  SCV: {
    普通: {
      units: rep('SCV', 15),
    },
  },
  狂热者: {
    普通: {
      units: rep('狂热者', 5),
    },
  },
  幽灵: {
    普通: {
      units: [
        ...rep('掠食者', 4),
        ...rep('陆战队员(精英)', 6),
        ...rep('幽灵<埃蒙>', 2),
      ],
    },
  },
}
