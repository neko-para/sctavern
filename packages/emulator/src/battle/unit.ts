import type { Unit } from '@sctavern/data'
import { dT, EPS } from './config'
import { Position } from './position'

export class UnitInstance {
  id: number
  group: number

  unit: Unit
  pos: Position

  life: number

  action:
    | {
        type: 'idle'
        cooldown: number
      }
    | {
        type: 'move'
        target: Position
      }
    | {
        type: 'attack'
        target: UnitInstance
      }

  constructor(u: Unit) {
    this.id = -1
    this.group = -1

    this.life = u.health

    this.unit = u
    this.pos = new Position(0, 0)
    this.action = {
      type: 'idle',
      cooldown: dT,
    }
  }

  checkAction(units: UnitInstance[]) {
    if (this.action.type === 'idle') {
      this.action.cooldown -= dT
      if (Math.abs(this.action.cooldown) > EPS) {
        return
      }
    }
    const targets = units
      .filter(u => u.group !== this.group)
      .map(unit => ({
        unit,
        dis: this.pos.sub(unit.pos).dis(),
      }))
      .sort((a, b) => {
        return a.dis === b.dis ? a.unit.id - b.unit.id : a.dis - b.dis
      })
    const t = targets[0] // TODO: choose proper target
    const w = this.unit?.weapon?.[0] // TODO: find proper weapon
    if (!w || !t) {
      this.action = {
        type: 'idle',
        cooldown: dT,
      }
      return
    }
    if (t.dis > w.range) {
      const mov = t.unit.pos
        .sub(this.pos)
        .norm()
        .mul((this.unit.speed || 1) * dT)
      const into = this.pos.add(mov)
      let blocked: Position | null = null
      let blockDis = Infinity
      for (const uu of units) {
        const d = uu.pos.sub(into).dis()
        if (
          uu.id !== this.id &&
          d < (this.unit.size || 0) + (uu.unit.size || 0)
        ) {
          if (blockDis > d) {
            blocked = uu.pos
            blockDis = d
          }
          break
        }
      }
      if (!blocked) {
        this.action = {
          type: 'move',
          target: into,
        }
      } else {
        // const backMid = this.pos.sub(blocked).norm()
        // const backTarget = this.pos.sub(into).norm()
        // const real = backMid.mul(2).sub(backTarget)
        const real = this.pos.sub(blocked).norm()

        this.action = {
          type: 'move',
          target: real.mul((this.unit.speed || 1) * dT).add(this.pos),
        }
      }
    } else {
      this.action = {
        type: 'attack',
        target: t.unit,
      }
    }
  }
}
