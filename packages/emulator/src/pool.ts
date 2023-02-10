import { CardData, PackData } from '@sctavern/data'
import type { CardKey, PackKey, Card } from '@sctavern/data'
import type { LCG } from './game'
import { repX } from './utils'

const poolCount: Record<number, number> = {
  1: 18,
  2: 15,
  3: 13,
  4: 11,
  5: 9,
  6: 6,
}

export class Pool {
  $ref$lcg: LCG
  heap: Partial<Record<CardKey, number>>
  allow: PackKey[]

  constructor(pack: PackKey[], lcg: LCG, poolPack: PackKey[]) {
    this.$ref$lcg = lcg
    this.heap = {}
    this.allow = poolPack

    pack.forEach(p => {
      PackData[p].forEach(c => {
        const card = CardData[c]
        if (p === '特典') {
          if (this.$ref$lcg.float() <= 0.15) {
            this.heap[c] = 1
          }
        } else {
          this.heap[c] = poolCount[card.level]
        }
      })
    })
  }

  discover(pred: (card: Card) => boolean, count: number, unique = true) {
    const nh: typeof this.heap = {}
    const f: Card[] = []
    const mf: Card[] = []
    Object.keys(this.heap).forEach(k => {
      const ck = k as CardKey
      const card = CardData[ck]

      if (pred(card)) {
        if (unique) {
          f.push(card)
          mf.push(...repX(card, (this.heap[ck] || 1) - 1))
        } else {
          f.push(...repX(card, this.heap[ck] ?? 0))
        }
      } else {
        nh[ck] = this.heap[ck]
      }
    })
    if (f.length + mf.length < count) {
      return null
    }
    this.heap = nh
    this.$ref$lcg.shuffle(f)
    if (f.length < count) {
      this.$ref$lcg.shuffle(mf)
      f.push(...mf.slice(0, count - f.length))
      this.drop(mf.slice(count - f.length))
    } else {
      this.drop(mf)
    }
    this.drop(f.slice(count))
    return f.slice(0, count)
  }

  drop(card: Card[]) {
    card.forEach(c => {
      if (!this.allow.includes(c.pack)) {
        return
      }
      const cnt = (this.heap[c.name] ?? 0) + 1
      /*
      let cnt = (this.heap[c.name] ?? 0) + 1
      if (cnt > poolCount[c.level]) {
        cnt = poolCount[c.level]
      }
      */
      this.heap[c.name] = cnt
    })
  }
}
