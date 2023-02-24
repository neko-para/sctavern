import { InnerMsg } from './events'
import { GameState } from './types'

export interface ClientAdapter {
  sendInput(msg: InnerMsg): Promise<void>

  onState: (state: GameState) => void
}

export interface ServerAdapter {
  onInput: (msg: InnerMsg) => void

  setState(state: GameState): Promise<void>
}

export function directLinkAdapters() {
  const result = {} as {
    client: ClientAdapter
    server: ServerAdapter
  }
  result.client = {
    async sendInput(msg) {
      result.server.onInput(msg)
    },
    onState: () => void 0,
  }
  result.server = {
    onInput: () => void 0,
    async setState(state: GameState) {
      result.client.onState(state)
    },
  }
  return result
}
