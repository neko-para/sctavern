import type { ClientAdapter } from './adapter'
import type { InnerMsg } from './events'
import type { DistributiveOmit, GameState } from './types'

export class Client {
  pos: number
  adapter: ClientAdapter
  observer: boolean
  state: GameState | null

  onStateChanged: () => void

  constructor(p: number, a: ClientAdapter, ob = false) {
    this.pos = p
    this.adapter = a
    this.observer = ob
    this.state = null

    this.onStateChanged = () => void 0

    this.adapter.onState = st => {
      this.state = structuredClone(st)
      this.onStateChanged()
    }
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
