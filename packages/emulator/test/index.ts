import { GameInstance } from '../src'
import CM from '../src/serialize'

const g = new GameInstance({
  Pack: ['核心'],
  Seed: 1,
  Role: ['白板'],
  Mutation: [],
})

g.start()

g.post({
  msg: '$refresh',
  player: 0,
})

const s = CM.serialize(g)

g.post({
  msg: '$refresh',
  player: 0,
})

console.log('---')

const ng = CM.deserialize(s) as GameInstance

ng.post({
  msg: '$refresh',
  player: 0,
})
