import { useContext } from 'react'
import { playerContext } from './Context'
import HandCard from './HandCard'
import { useStyle } from './style'

function HandSection() {
  const player = useContext(playerContext)
  const style = useStyle()
  return (
    <div className={style.HandSection}>
      {player.hand.map((item, index) => {
        return <HandCard item={item} pos={index} key={index}></HandCard>
      })}
    </div>
  )
}

export default HandSection
