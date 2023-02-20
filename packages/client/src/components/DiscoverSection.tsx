import { useContext } from 'react'
import { playerContext } from './Context'
import DiscoverCard from './DiscoverCard'
import { useStyle } from './style'

function DiscoverSection() {
  const player = useContext(playerContext)
  const style = useStyle()
  return (
    <div className={style.DiscoverSection}>
      {player.discover?.item.map((item, index) => {
        return <DiscoverCard item={item} pos={index} key={index}></DiscoverCard>
      })}
    </div>
  )
}

export default DiscoverSection
