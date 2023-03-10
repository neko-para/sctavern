import { playerContext } from './Context'
import HandCard from './HandCard'
import './index.css'

function HandSection() {
  const player = useContext(playerContext)
  return (
    <div className="HandSection">
      {player.hand.map((item, index) => {
        return <HandCard item={item} pos={index} key={index}></HandCard>
      })}
    </div>
  )
}

export default HandSection
