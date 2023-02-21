import { type GameState, Wrapper, Client } from '@sctavern/emulator'
import GameWrapper from '@/components/GameWrapper'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Control from '@/components/ControlPanel/Control'
import Cheat from '@/components/ControlPanel/Cheat'
import GameInstance from '@/components/GameInstance'

export interface Props {
  instance: typeof GameInstance
}

function LocalGame(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const cfgJson = searchParams.get('config')
  const navigate = useNavigate()

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
  return (
    <GameWrapper
      state={state}
      client={client.current}
      instance={props.instance}
    >
      <Box
        component={CardView}
        alignSelf="start"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
      >
        <Button
          onClick={() => {
            navigate('/local/config')
          }}
        >
          返回
        </Button>
        <div></div>
        <Control wrapper={wrapper.current}></Control>
        <Cheat></Cheat>
      </Box>
    </GameWrapper>
  )
}

export default LocalGame
