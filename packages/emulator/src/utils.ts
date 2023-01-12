import { Descriptor } from './types'

export function rep<T>(v: T, n: number) {
  return Array.from({ length: n }, () => v)
}

export function dup<T>(v: T): T {
  if (typeof v === 'object' && v) {
    if (v instanceof Array) {
      return v.map(dup) as T
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
}

export function notNull<T>(v: T | null): v is T {
  return !!v
}

export function NotImplementYet(): Descriptor {
  return {
    listener: {},
  }
}
