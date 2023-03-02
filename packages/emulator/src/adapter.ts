import { InnerMsg } from './events'
import { GameState } from './types'
import WebSocket from 'isomorphic-ws'

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
    ws: WebSocket
  } = {
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
    result.onState(JSON.parse(ev.data.toString()))
  })
  return result
}

export function wsServerAdapter(socket: WebSocket.WebSocket): ServerAdapter {
  const result: ServerAdapter & {
    ws: WebSocket.WebSocket
  } = {
    ws: socket,
    onInput: () => void 0,
    onClose: () => void 0,

    async setState(state: GameState) {
      return new Promise((resolve, reject) => {
        this.ws.send(JSON.stringify(state), err => {
          if (err) {
            reject(err)
          } else {
            resolve(void 0)
          }
        })
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

export async function wsServerAdapters(
  port: number,
  listener: (adapter: ServerAdapter, search: URLSearchParams) => void
) {
  return new Promise<void>(resolve => {
    const result = {
      server: new WebSocket.Server(
        {
          port,
        },
        resolve
      ),
    }
    result.server.on('connection', (socket, request) => {
      if (!request.url) {
        return
      }
      const url = new URL(request.url, `http://${request.headers.host}`)
      const subr: ServerAdapter & {
        ws: WebSocket.WebSocket
      } = {
        ws: socket,
        onInput: () => void 0,
        onClose: () => void 0,

        async setState(state: GameState) {
          return new Promise((resolve, reject) => {
            this.ws.send(JSON.stringify(state), err => {
              if (err) {
                reject(err)
              } else {
                resolve(void 0)
              }
            })
          })
        },
      }
      subr.ws.on('message', data => {
        subr.onInput(JSON.parse(data.toString()))
      })
      subr.ws.on('close', () => {
        subr.onClose()
      })
      listener(subr, url.searchParams)
    })
  })
}
