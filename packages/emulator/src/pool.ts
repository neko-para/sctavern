import { CardKey, Pack, CardData, Card, CardPack } from '@sctavern/data'
import { LCG } from './game'
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
  allow: Pack[]

  constructor(pack: Pack[], lcg: LCG, poolPack: Pack[]) {
    this.$ref$lcg = lcg
    this.heap = {}
    this.allow = poolPack

    pack.forEach(p => {
      CardPack[p].forEach(c => {
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
          f.push(...repX(card, this.heap[ck] || 0))
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
      if (!this.allow.includes(c.pack)) {
        return
      }
      let cnt = (this.heap[c.name] || 0) + 1
      if (cnt > poolCount[c.level]) {
        cnt = poolCount[c.level]
      }
      this.heap[c.name] = cnt
    })
  }
}
