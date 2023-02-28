import { playerContext } from '../Context'
import StoreCard from '../StoreCard'

function StoreSection() {
  const player = useContext(playerContext)
  const [showCard, setShowCard] = useState(-1)
  if (showCard !== -1 && !player.store[showCard]) {
    setShowCard(-1)
  }
  return (
    <Grid container direction="column" gap={1} className="Section">
      <Dialog
        open={showCard !== -1}
        onClose={() => {
          setShowCard(-1)
        }}
      >
        <StoreCard
          item={player.store[showCard]}
          pos={showCard}
          lock={player.locked}
        ></StoreCard>
      </Dialog>
      {player.store.map((item, index) => {
        return (
          <Button
            variant={player.locked && item ? 'outlined' : 'text'}
            size="small"
            key={index}
            onClick={() => {
              setShowCard(item ? index : -1)
            }}
            style={{
              textDecoration: item?.special ? 'underline' : '',
            }}
          >
            {item?.card ?? '(商店)'}
          </Button>
        )
      })}
    </Grid>
  )
}

export default StoreSection
