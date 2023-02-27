import { clientContext, playerContext } from '../Context'
import DiscoverCard from '../DiscoverCard'

function DiscoverSection() {
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  return (
    <Grid container direction="column" gap={1}>
      {player.discover?.item.map((item, index) => {
        return <DiscoverCard item={item} pos={index} key={index}></DiscoverCard>
      })}
      {player.discover?.extra && (
        <Button
          variant="contained"
          onClick={() => {
            client.autoPost({
              msg: '$choice',
              category: 'discover',
              place: -1,
            })
          }}
        >
          {player.discover.extra}
        </Button>
      )}
    </Grid>
  )
}

export default DiscoverSection
