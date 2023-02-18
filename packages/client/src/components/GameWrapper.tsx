import type { GameState, Client } from '@sctavern/emulator'
import { clientContext, gameContext } from './Context'
import GameInstance from './GameInstance'

export interface Props {
  state: GameState
  client: Client
}

function GameWrapper(props: Props) {
  return (
    <gameContext.Provider value={props.state}>
      <clientContext.Provider value={props.client}>
        <GameInstance></GameInstance>
      </clientContext.Provider>
    </gameContext.Provider>
  )
}

export default GameWrapper
