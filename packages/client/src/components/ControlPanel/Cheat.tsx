import { CardData, CardKey, PackData, UnitData, UnitKey } from '@sctavern/data'
import { clientContext, gameContext, playerContext } from '../Context'
import Searcher from './Searcher'

function Cheat() {
  const [showCardDlg, setShowCardDlg] = useState(false)
  const [showUnitDlg, setShowUnitDlg] = useState(false)
  const game = useContext(gameContext)
  const client = useContext(clientContext)
  const player = useContext(playerContext)

  const allCard = useMemo(() => {
    return game.config.ActivePack.map(pack => PackData[pack])
      .flat()
      .map(card => CardData[card])
  }, [game.config.ActivePack])
  const allUnit = useMemo(() => {
    return game.config.ActiveUnit.map(unit => UnitData[unit])
  }, [game.config.ActiveUnit])
  return (
    <Fragment>
      <Dialog
        fullWidth
        open={showCardDlg}
        onClose={() => setShowCardDlg(false)}
      >
        <Grid component={CardView} container flexDirection="column">
          <Searcher
            item={allCard}
            onChoose={item => {
              client.autoPost({
                msg: '$cheat',
                type: 'card',
                cardt: item.name as CardKey,
              })
            }}
          ></Searcher>
        </Grid>
      </Dialog>

      <Dialog
        fullWidth
        open={showUnitDlg}
        onClose={() => setShowUnitDlg(false)}
      >
        <Grid component={CardView} container flexDirection="column">
          <Searcher
            item={allUnit}
            onChoose={item => {
              client.autoPost({
                msg: '$cheat',
                type: 'unit',
                units: [item.name as UnitKey],
                place: player.selected.place,
              })
            }}
          ></Searcher>
        </Grid>
      </Dialog>

      <Button
        onClick={() => {
          client.autoPost({
            msg: '$cheat',
            type: 'resource',
          })
        }}
      >
        资源
      </Button>
      <Button
        onClick={() => {
          setShowCardDlg(true)
        }}
      >
        卡牌
      </Button>
      <Button
        onClick={() => {
          setShowUnitDlg(true)
        }}
        disabled={player.selected.area !== 'present'}
      >
        单位
      </Button>
      <div></div>
    </Fragment>
  )
}

export default Cheat
