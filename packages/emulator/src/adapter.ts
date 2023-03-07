import { InnerMsg } from './events'
import { GameState } from './types'
import WebSocket from 'isomorphic-ws'
import { Buffer } from 'buffer'
import { DiffCompressSync } from './utils'

export interface ClientAdapter {
  sendInput(msg: InnerMsg): Promise<void>
  close(): void

  onState: (state: GameState) => void
}

export interface ServerAdapter {
  onInput: (msg: InnerMsg) => void
  onClose: () => void

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
    close() {
      result.server.onClose()
    },

    onState: () => void 0,
  }
  result.server = {
    onInput: () => void 0,
    onClose: () => void 0,
    async setState(state: GameState) {
      result.client.onState(state)
    },
  }
  return result
}

export function wsClientAdapter(url: string): ClientAdapter {
  const result: ClientAdapter & {
    sync: null | DiffCompressSync<GameState>
    ws: WebSocket
  } = {
    sync: null,
    ws: new WebSocket(url),
    async sendInput(msg: InnerMsg) {
      return new Promise((resolve, reject) => {
        this.ws.send(JSON.stringify(msg), err => {
          if (err) {
            reject(err)
          } else {
            resolve(void 0)
          }
        })
      })
    },
    close() {
      this.ws.close()
    },

    onState: () => void 0,
  }
  result.ws.addEventListener('message', ev => {
    const blob = ev.data as unknown as Blob
    blob
      .arrayBuffer()
      .then(ab => Buffer.from(ab))
      .then(buf => {
        if (result.sync) {
          result.sync.applyPatch(buf)
        } else {
          result.sync = new DiffCompressSync()
          result.sync.directSet(buf)
        }
        result.onState(structuredClone(result.sync.value))
      })
  })
  return result
}

export function wsServerAdapter(socket: WebSocket.WebSocket): ServerAdapter {
  const result: ServerAdapter & {
    sync: null | DiffCompressSync<GameState>
    ws: WebSocket.WebSocket
  } = {
    sync: null,
    ws: socket,
    onInput: () => void 0,
    onClose: () => void 0,

    async setState(state: GameState) {
      return new Promise((resolve, reject) => {
        let buf = (() => {
          if (this.sync) {
            return this.sync.createPatch(state)
          } else {
            this.sync = new DiffCompressSync(state)
            return this.sync.directGet()
          }
        })()
        if (buf) {
          this.ws.send(buf, err => {
            if (err) {
              reject(err)
            } else {
              resolve(void 0)
            }
          })
        }
      })
    },
  }
  result.ws.on('message', data => {
    result.onInput(JSON.parse(data.toString()))
  })
  result.ws.on('close', () => {
    result.onClose()
  })
  return result
}
