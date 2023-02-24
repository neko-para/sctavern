import type { GameState, Client } from '@sctavern/emulator'
import { PropsWithChildren } from 'react'
import { clientContext, gameContext } from './Context'
import GameInstance from './GameInstance'

export interface Props {
  client: Client
  instance: typeof GameInstance
}

function GameWrapper(props: PropsWithChildren<Props>) {
  const [state, setState] = useState<GameState>(useContext(gameContext))
  props.client.adapter.onState = st => {
    setState(st)
  }
  return (
    <gameContext.Provider value={state}>
      <clientContext.Provider value={props.client}>
        <props.instance>{props.children}</props.instance>
      </clientContext.Provider>
    </gameContext.Provider>
  )
}

export default GameWrapper
