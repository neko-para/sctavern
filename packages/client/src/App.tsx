import { type GameState, Wrapper, Client } from '@sctavern/emulator'
import { useState, useRef, useEffect } from 'react'
import GameWrapper from './components/GameWrapper'

function App() {
  const wrapper = useRef(new Wrapper())
  const client = useRef(new Client(0, wrapper.current))
  const [state, setState] = useState<GameState>(wrapper.current.game.getState())
  useEffect(() => {
    console.log('Register updater')
    wrapper.current.server.notify.push(setState)
    wrapper.current.game.start()
    return () => {
      console.log('Clean updater')
      wrapper.current.server.notify = wrapper.current.server.notify.filter(
        f => f !== setState
      )
    }
  }, [])
  return <GameWrapper state={state} client={client.current}></GameWrapper>
}

export default App
