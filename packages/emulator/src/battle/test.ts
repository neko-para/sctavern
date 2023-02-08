import { UnitData } from '@sctavern/data'
import { LCG } from '../game'
import { Battle } from './battle'
import { Position } from './position'
import { UnitInstance } from './unit'

const lzdy = UnitData['陆战队员']

function factory(x: number, y: number, g: number) {
  const u = new UnitInstance(lzdy)
  u.pos = new Position(x, y)
  u.group = g
  return u
}

function Test() {
  const lcg = new LCG(1)
  const battle = new Battle(lcg)
  battle.units.push(
    factory(0, 0, 0),
    factory(1, 0, 0),
    factory(1, 1, 0),
    factory(0, 1, 0),
    factory(10, 10, 1),
    factory(10, 9, 1),
    factory(9, 10, 1),
    factory(9, 9, 1)
  )

  battle.init()

  setInterval(() => {
    battle.iterate()
  }, 50)
}

Test()
