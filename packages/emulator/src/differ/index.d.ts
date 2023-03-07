import type { Delta } from 'jsondiffpatch'

export const diff: (left: any, right: any) => Delta | undefined
export const patch: (left: any, delta: Delta) => any
export type Delta = Delta
