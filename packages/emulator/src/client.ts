import type { ClientAdapter } from './adapter'
import type { InnerMsg } from './events'
import type { DistributiveOmit } from './types'

export class Client {
  pos: number
  adapter: ClientAdapter
  observer: boolean

  constructor(p: number, a: ClientAdapter, ob = false) {
    this.pos = p
    this.adapter = a
    this.observer = ob
  }

  post(msg: InnerMsg) {
    if (!this.observer) {
      this.adapter.sendInput({
        ...msg,
      })
    }
  }

  autoPost<
    M extends Extract<InnerMsg, { player: number }>,
    MM extends DistributiveOmit<M, 'player'>
  >(msg: MM) {
    this.post({
      ...msg,
      player: this.pos,
    })
  }
}
