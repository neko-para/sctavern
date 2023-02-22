import { clientContext, playerContext } from '../Context'
import PresentCard from '../PresentCard'

function PresentSection() {
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  const [showCard, setShowCard] = useState(-1)
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 2fr 1fr"
      gap={1}
      className="Section"
    >
      <Dialog
        open={showCard !== -1}
        onClose={() => {
          setShowCard(-1)
        }}
      >
        {showCard !== -1 && (
          <PresentCard
            item={player.present[showCard]}
            pos={showCard}
          ></PresentCard>
        )}
      </Dialog>
      {player.present.map((item, index) => {
        return (
          <Fragment key={index}>
            {player.status === 'insert' ? (
              <Button
                onClick={() => {
                  client.autoPost({
                    msg: '$choice',
                    category: 'insert',
                    place: index,
                  })
                }}
              >
                这里
              </Button>
            ) : player.status === 'deploy' && item.card ? (
              <Button
                onClick={() => {
                  client.autoPost({
                    msg: '$choice',
                    category: 'deploy',
                    place: index,
                  })
                }}
              >
                这里
              </Button>
            ) : (
              <div></div>
            )}
            <Button
              variant={
                player.selected.area === 'present' &&
                player.selected.place === index
                  ? 'outlined'
                  : 'text'
              }
              onClick={() => {
                setShowCard(item.card ? index : -1)
              }}
            >
              {item.card?.name ?? '(进场)'}
            </Button>
            {player.status === 'normal' &&
            !(
              player.selected.area === 'present' &&
              player.selected.place === index
            ) ? (
              <Button
                onClick={() => {
                  if (player.present[index].card) {
                    client.autoPost({
                      msg: '$select',
                      area: 'present',
                      place: index,
                    })
                  } else {
                    client.autoPost({
                      msg: '$select',
                      area: 'none',
                      place: -1,
                    })
                  }
                }}
              >
                选择
              </Button>
            ) : (
              <div></div>
            )}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default PresentSection
