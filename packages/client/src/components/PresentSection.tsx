import { useContext } from 'react'
import { playerContext } from './Context'
import PresentCard from './PresentCard'
import './PresentSection.css'

function PresentSection() {
  const player = useContext(playerContext)
  return (
    <div className="PresentSection">
      {player.present.map((item, index) => {
        return <PresentCard item={item} pos={index} key={index}></PresentCard>
      })}
    </div>
  )
}

export default PresentSection
