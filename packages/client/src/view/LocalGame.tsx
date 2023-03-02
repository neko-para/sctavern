import {
  type GameState,
  Wrapper,
  Client,
  directLinkAdapters,
} from '@sctavern/emulator'
import GameWrapper from '@/components/GameWrapper'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Control from '@/components/ControlPanel/Control'
import Cheat from '@/components/ControlPanel/Cheat'
import Storage from '@/components/ControlPanel/Storage'
import GameInstance from '@/components/GameInstance'

export interface Props {
  instance: typeof GameInstance
}

function LocalGame(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const cfgJson = searchParams.get('config')
  const navigate = useNavigate()

  const adapter = useRef(directLinkAdapters())
  const wrapper = useRef(new Wrapper())
  const client = useRef(new Client(0, adapter.current.client))
  useEffect(() => {
    wrapper.current.addAdapter(adapter.current.server)
    if (cfgJson) {
      wrapper.current.init(JSON.parse(cfgJson))
    }
    wrapper.current.game.start()
  }, [])
  return (
    <GameWrapper client={client.current} instance={props.instance}>
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
        <Storage wrapper={wrapper.current}></Storage>
      </Box>
    </GameWrapper>
  )
}

export default LocalGame
