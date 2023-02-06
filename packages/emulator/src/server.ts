import type { GameState } from './types'

export class Server {
  notify: ((state: GameState) => void)[]

  constructor() {
    this.notify = []
  }

  emit(state: GameState) {
    this.notify.forEach(n => n(state))
  }
}
