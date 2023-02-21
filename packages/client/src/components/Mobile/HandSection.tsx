import { playerContext } from '../Context'
import HandCard from '../HandCard'

function HandSection() {
  const player = useContext(playerContext)
  const [showCard, setShowCard] = useState(-1)
  if (showCard !== -1 && !player.hand[showCard]) {
    setShowCard(-1)
  }
  return (
    <Grid container direction="column" gap={1}>
      <Dialog
        open={showCard !== -1}
        onClose={() => {
          setShowCard(-1)
        }}
      >
        <HandCard item={player.hand[showCard]} pos={showCard}></HandCard>
      </Dialog>
      {player.hand.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setShowCard(item ? index : -1)
            }}
          >
            {item?.card ?? 'no card'}
          </Button>
        )
      })}
    </Grid>
  )
}

export default HandSection
