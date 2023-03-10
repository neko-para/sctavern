import { playerContext } from '../Context'
import HandCard from '../HandCard'

function HandSection() {
  const player = useContext(playerContext)
  const [showCard, setShowCard] = useState(-1)
  if (showCard !== -1 && !player.hand[showCard]) {
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
        <HandCard item={player.hand[showCard]} pos={showCard}></HandCard>
      </Dialog>
      {player.hand.map((item, index) => {
        return (
          <Button
            size="small"
            key={index}
            onClick={() => {
              setShowCard(item ? index : -1)
            }}
          >
            {item?.card ?? '(暂存)'}
          </Button>
        )
      })}
    </Grid>
  )
}

export default HandSection
