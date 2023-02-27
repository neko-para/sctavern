import { clientContext, playerContext } from './Context'
import DiscoverCard from './DiscoverCard'
import './index.css'

function DiscoverSection() {
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  return (
    <div className="DiscoverSection">
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
    </div>
  )
}

export default DiscoverSection
