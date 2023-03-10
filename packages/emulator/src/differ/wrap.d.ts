import type { Delta } from 'jsondiffpatch'

export { type Delta }

export function diff(left: any, right: any): Delta | undefined
export function patch(left: any, patch: Delta): any
export function unpatch(right: any, patch: Delta): any
