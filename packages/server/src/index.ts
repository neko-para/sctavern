import Express from 'express'
import { GameConfig, Init, Wrapper, wsServerAdapter } from '@sctavern/emulator'
import compression from 'compression'
import ExpressWs from 'express-ws'

Init()

const wrappers = new Map<string, Wrapper>()

const server = ExpressWs(Express()).app

server.use(Express.json())
server.use(compression())

server.use(Express.static('www'))

server.post('/api/setup', (request, response) => {
  const config = request.body as {
    id: string
    config: GameConfig
  }
  const wrapper = new Wrapper(config.id)
  console.log(`setup game ${config.id}`)
  wrapper.gameDroped = i => {
    console.log(`drop game ${i}`)
    wrappers.delete(i as string)
  }
  wrappers.set(config.id, wrapper)
  wrapper.init(config.config)
  wrapper.game.start()

  response.send(
    JSON.stringify({
      message: 'ok',
    })
  )
})

server.post('/api/query', (request, response) => {
  response.send(
    JSON.stringify({
      message: 'ok',
      ids: [...wrappers.keys()],
    })
  )
})

server.ws('/wsapi/play', (socket, request) => {
  const adapter = wsServerAdapter(socket)
  const id = request.query.id?.toString()
  if (!id) {
    return
  }
  if (wrappers.has(id)) {
    const wrapper = wrappers.get(id) as Wrapper
    wrapper.addAdapter(adapter)
  } else {
    socket.close()
  }
})

server.listen(6658)
