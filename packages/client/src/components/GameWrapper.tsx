import type { GameState, Client } from '@sctavern/emulator'
import { PropsWithChildren } from 'react'
import { clientContext, gameContext } from './Context'
import GameInstance from './GameInstance'

export interface Props {
  state: GameState
  client: Client
  instance: typeof GameInstance
}

function GameWrapper(props: PropsWithChildren<Props>) {
  return (
    <gameContext.Provider value={props.state}>
      <clientContext.Provider value={props.client}>
        <props.instance>{props.children}</props.instance>
      </clientContext.Provider>
    </gameContext.Provider>
  )
}

export default GameWrapper
