import {
  type GameState,
  Wrapper,
  Client,
  directLinkAdapters,
  wsClientAdapter,
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
  const remote = searchParams.get('remote')
  const pos = Number(searchParams.get('pos') ?? '0')
  const ob = searchParams.has('ob')
  const navigate = useNavigate()

  const adapter = useMemo(
    () => wsClientAdapter(`ws://${remote}/?id=${id}`),
    [searchParams]
  )
  const client = useMemo(() => new Client(pos, adapter, ob), [searchParams])
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
        {/* <Control wrapper={wrapper.current}></Control> */}
        <Cheat></Cheat>
        {/* <Storage wrapper={wrapper.current}></Storage> */}
      </Box>
    </GameWrapper>
  )
}

export default RemoteGame
