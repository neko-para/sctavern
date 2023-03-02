import {
  type GameState,
  Wrapper,
  Client,
  directLinkAdapters,
  wsClientAdapter,
  ClientAdapter,
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

function RemoteGame(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
  const pos = Number(searchParams.get('pos') ?? '0')
  const ob = searchParams.has('ob')
  const navigate = useNavigate()

  const adapter = useRef<ClientAdapter | null>(null)
  const [client, setClient] = useState<Client | null>(null)

  useEffect(() => {
    adapter.current = wsClientAdapter(
      `ws://${window.location.host}/wsapi/play?id=${id}`
    )
    setClient(new Client(pos, adapter.current, ob))
    return () => {
      adapter.current?.close()
      adapter.current = null
      setClient(null)
    }
  }, [])

  if (client) {
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
              navigate('/remote/config')
            }}
          >
            返回
          </Button>
          <div></div>
          {/* <Control wrapper={wrapper.current}></Control> */}
          <Cheat></Cheat>
          {/* <Storage wrapper={wrapper.current}></Storage> */}
        </Box>
      </GameWrapper>
    )
  } else {
    return <div></div>
  }
}

export default RemoteGame
