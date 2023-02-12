import type { UnitInstance } from './unit'
import type { LCG } from '../game'
import { dT } from './config'

export class Battle {
  lcg: LCG
  units: UnitInstance[]

  onFinish?: (battle: Battle) => void

  constructor(lcg: LCG) {
    this.lcg = lcg
    this.units = []
  }

  init() {
    this.lcg.shuffle(this.units)
    this.units.forEach((u, i) => {
      u.id = i
    })
  }

  iterate() {
    this.units.forEach(u => {
      if (u.life === 0) {
        return
      }
      u.checkAction(this.units)
    })
    this.units.forEach(u => {
      if (u.life === 0) {
        return
      }
      switch (u.action.type) {
        case 'move': {
          u.pos = u.action.target
          break
        }
        case 'attack': {
          const damage = Math.max(
            1,
            (u.unit.weapon?.[0].damage ?? 0) -
              (u.action.target.unit.armor?.defense ?? 0)
          )
          u.action.target.life = Math.max(0, u.action.target.life - damage)
          u.action = {
            type: 'idle',
            cooldown: u.unit.weapon?.[0].speed || dT,
          }
          break
        }
      }
    })
    this.units = this.units.filter(u => u.life > 0)

    const gs: Record<number, true> = {}
    this.units.forEach(u => {
      gs[u.group] = true
    })
    if (Object.keys(gs).length === 1) {
      this.onFinish?.(this)
    }

    /*
      const state: string[] = []
      this.units.forEach(u => {
        state.push(`${u.id}/${u.group}: ${u.life} <${u.pos.str()}>`)
      })
      console.log(state.join('\t'))
    */
  }
}
