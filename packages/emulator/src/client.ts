import { InnerMsg } from './events'
import { DistributiveOmit } from './types'
import { Wrapper } from './wrapper'

export class Client {
  pos: number
  wrapper: Wrapper
  observer: boolean

  constructor(p: number, w: Wrapper, ob = false) {
    this.pos = p
    this.wrapper = w
    this.observer = ob
  }

  post(msg: InnerMsg) {
    if (!this.observer) {
      this.wrapper.game.input({
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

  getPlayer() {
    return this.wrapper.game.player[this.pos]
  }
}
