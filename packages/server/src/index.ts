import Express from 'express'
import {
  AllRole,
  PresetPoolPack,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
  RoleData,
} from '@sctavern/data'
import {
  GameConfig,
  Init,
  Wrapper,
  wsServerAdapter,
  wsServerAdapters,
} from '@sctavern/emulator'
import ExpressWs from 'express-ws'

Init()

const wrappers = new Map<string, Wrapper>()

const rs = AllRole.filter(r => !RoleData[r].ext)

const server = ExpressWs(Express()).app

server.use(Express.json())

server.use(Express.static('../client/dist-direct'))

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
