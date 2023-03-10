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

  const [wrapper, setWrapper] = useState<Wrapper | null>(null)
  const [client, setClient] = useState<Client | null>(null)
  useEffect(() => {
    const adapter = directLinkAdapters()
    const w = new Wrapper()
    const c = new Client(0, adapter.client)
    if (cfgJson) {
      w.init(JSON.parse(cfgJson))
    }
    w.game.start()
    w.addAdapter(adapter.server)
    setWrapper(w)
    setClient(c)
    return () => {
      if (wrapper) {
        wrapper.adapters = []
      }
      setWrapper(null)
      setClient(null)
    }
  }, [])
  if (client && wrapper) {
    return (
      <GameWrapper client={client} instance={props.instance}>
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
          <Control wrapper={wrapper}></Control>
          <Cheat></Cheat>
          <Storage wrapper={wrapper}></Storage>
        </Box>
      </GameWrapper>
    )
  } else {
    return <div></div>
  }
}

export default LocalGame
