import HandSection from './HandSection'
import MainInfo from '../MainInfo'
import PresentSection from './PresentSection'
import StoreSection from './StoreSection'
import { clientContext, gameContext, playerContext } from '../Context'
import GlobalAction from './GlobalAction'
import DiscoverSection from './DiscoverSection'
import { PropsWithChildren } from 'react'

function GameInstanceMobile(props: PropsWithChildren<{}>) {
  const player =
    useContext(gameContext).player[useContext(clientContext).pos] ?? null
  const [showControl, setShowControl] = useState(false)
  const [hideDiscover, setHideDiscover] = useState(false)
  if (player) {
    return (
      <playerContext.Provider value={player}>
        <Dialog open={player.status === 'discover' && !hideDiscover}>
          <DialogContent>
            <DiscoverSection></DiscoverSection>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setHideDiscover(true)
              }}
            >
              隐藏
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={showControl}
          onClose={() => {
            setShowControl(false)
          }}
        >
          <DialogContent>{props.children}</DialogContent>
        </Dialog>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" rowGap={1}>
          <Box gridColumn="span 2">
            <MainInfo></MainInfo>
          </Box>
          <Box gridColumn="span 2">
            <GlobalAction>
              {player.status === 'discover' && hideDiscover && (
                <Button
                  variant="contained"
                  onClick={() => {
                    setHideDiscover(false)
                  }}
                >
                  显示
                </Button>
              )}
              <Button
                variant="contained"
                onClick={() => {
                  setShowControl(true)
                }}
              >
                菜单
              </Button>
            </GlobalAction>
          </Box>
          <Box component={StoreSection}></Box>
          <Box component={HandSection}></Box>
          <Box gridColumn="span 2">
            <PresentSection></PresentSection>
          </Box>
          <Box></Box>
        </Box>
      </playerContext.Provider>
    )
  } else {
    return <div></div>
  }
}

export default GameInstanceMobile
