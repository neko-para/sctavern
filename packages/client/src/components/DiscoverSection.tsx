import { playerContext } from './Context'
import DiscoverCard from './DiscoverCard'
import './index.css'

function DiscoverSection() {
  const player = useContext(playerContext)
  return (
    <div className="DiscoverSection">
      {player.discover?.item.map((item, index) => {
        return <DiscoverCard item={item} pos={index} key={index}></DiscoverCard>
      })}
    </div>
  )
}

export default DiscoverSection