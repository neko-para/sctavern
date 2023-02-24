import { initDefault } from './serialize'

export * from './adapter'
export * from './battle'
export * from './card'
export * from './client'
export * from './events'
export * from './game'
export * from './player'
export * from './pool'
export * from './types'
export * from './utils'
export * from './wrapper'

let inited = false

export function Init() {
  if (!inited) {
    inited = true
    initDefault()
  }
}
