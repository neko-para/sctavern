import { RandomUpgrade, UnitData } from '@sctavern/data'
import type { UpgradeKey } from '@sctavern/data'
import type { UnitKey } from '@sctavern/data'
import type { GameInstance, LCG } from './game'
import cm from './serialize'
import type { Descriptor } from './types'
import { deflateRaw, inflateRaw } from 'pako'

export function rep(v: UnitKey, n: number) {
  return Array.from({ length: n }, () => v)
}

export function repX<T>(v: T, n: number) {
  return Array.from({ length: n }, () => v)
}

export function chunk<T>(arr: T[], k: number) {
  let i = 0
  const res: T[][] = []
  while (i < arr.length) {
    res.push(arr.slice(i, i + k))
    i += k
  }
  return res
}

export function dup<T>(v: T): T {
  return structuredClone(v)
  /*
  if (typeof v === 'object' && v) {
    if (v instanceof Array) {
      return v.map(dup) as unknown as T
    } else {
      const r: Record<string | number | symbol, unknown> = {}
      for (const k in v) {
        r[k] = dup(v[k])
      }
      return r as T
    }
  } else {
    return v
  }
  */
}

export function notNull<T>(v: T | null): v is T {
  return !!v
}

export function NotImplementYet(text?: [string, string]): Descriptor {
  return text
    ? {
        text,
      }
    : {}
}

export function Serialize(game: GameInstance) {
  return cm.serialize(game)
}

export function Deserialize(data: string) {
  return cm.deserialize(data) as GameInstance
}

export function mostValueUnit(
  u: UnitKey[],
  cmp: (v1: number, v2: number) => boolean = (v1, v2) => v1 > v2,
  cv: (u: UnitKey) => number = u => UnitData[u].value
): {
  unit: UnitKey | null
  index: number
  value: number
} {
  if (u.length === 0) {
    return {
      unit: null,
      index: -1,
      value: -1,
    }
  }
  const uv = u.map(cv)
  const res = uv.reduce(
    (ctx, value, index) => {
      if (cmp(value, ctx.value)) {
        return {
          index,
          value,
        }
      } else {
        return ctx
      }
    },
    {
      index: 0,
      value: uv[0],
    }
  )
  return {
    ...res,
    unit: u[res.index],
  }
}

export function randomUpgrades(
  lcg: LCG,
  count: number,
  pred: (u: UpgradeKey) => boolean = () => true
): UpgradeKey[] {
  return lcg.shuffle(RandomUpgrade.filter(pred)).slice(0, count)
}

export function compress(obj: unknown): Buffer {
  return Buffer.from(deflateRaw(JSON.stringify(obj)))
}

export function decompress<T>(buf: Buffer): T {
  return JSON.parse(inflateRaw(buf, { to: 'string' }))
}
