import { playerContext } from '../Context'
import DiscoverCard from '../DiscoverCard'

function DiscoverSection() {
  const player = useContext(playerContext)
  return (
    <Grid container direction="column" gap={1}>
      {player.discover?.item.map((item, index) => {
        return <DiscoverCard item={item} pos={index} key={index}></DiscoverCard>
      })}
    </Grid>
  )
}

export default DiscoverSection
