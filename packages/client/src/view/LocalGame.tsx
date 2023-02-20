import { type GameState, Wrapper, Client } from '@sctavern/emulator'
import GameWrapper from '@/components/GameWrapper'
import { useSearchParams } from 'react-router-dom'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const cfgJson = searchParams.get('config')

  const wrapper = useRef(new Wrapper())
  const client = useRef(new Client(0, wrapper.current))
  const [state, setState] = useState<GameState>(wrapper.current.game.getState())
  useEffect(() => {
    console.log('Register updater')
    wrapper.current.server.notify.push(setState)
    if (cfgJson) {
      wrapper.current.init(JSON.parse(cfgJson))
    }
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
