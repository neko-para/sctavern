import { CardKey, Pack, AllCard, CardData, Card } from '@sctavern/data'
import { LCG } from './game'
import { rep } from './utils'

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

  constructor(pack: Pack[], lcg: LCG) {
    this.$ref$lcg = lcg
    this.heap = {}

    AllCard.forEach(c => {
      const card = CardData[c]
      if (card.attr.pool && pack.includes(card.pack)) {
        if (!card.attr.rare) {
          this.heap[c] = poolCount[card.level]
        } else {
          if (this.$ref$lcg.float() <= 0.15) {
            this.heap[c] = 1
          }
        }
      }
    })
  }

  discover(pred: (card: Card) => boolean, count: number, unique = true) {
    const nh: typeof this.heap = {}
    const f: Card[] = []
    const mf: Card[] = []
    Object.keys(this.heap).forEach(k => {
      const ck = k as CardKey
      const card = CardData[ck]

      // if (pred(card) && Math.random() > 0.5) {
      if (pred(card) && card.race === 'T') {
        if (unique) {
          f.push(card)
          mf.push(...rep(card, (this.heap[ck] || 1) - 1))
        } else {
          f.push(...rep(card, this.heap[ck] || 0))
        }
      } else {
        nh[ck] = this.heap[ck]
      }
    })
    if (f.length + mf.length < count) {
      throw `Heap is not enough!`
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
      let cnt = (this.heap[c.name] || 0) + 1
      if (cnt > poolCount[c.level]) {
        cnt = poolCount[c.level]
      }
      this.heap[c.name] = cnt
    })
  }
}
