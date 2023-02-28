import {
  Client,
  directLinkAdapters,
  GameState,
  Init,
  PlayerState,
  Wrapper,
} from '@sctavern/emulator'
import { createContext } from 'react'

Init()

const dl = directLinkAdapters()
const fake = new Wrapper(dl.server)
const client = new Client(0, dl.client)
const ctx = fake.game.getState()

export const gameContext = createContext<GameState>(ctx)
export const clientContext = createContext<Client>(client)
export const playerContext = createContext<PlayerState>(
  ctx.player[0] as PlayerState
)
