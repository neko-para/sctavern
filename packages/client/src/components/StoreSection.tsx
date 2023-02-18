import { useContext } from 'react'
import { playerContext } from './Context'
import StoreCard from './StoreCard'
import './StoreSection.css'

function StoreSection() {
  const player = useContext(playerContext)
  return (
    <div className="StoreSection">
      {player.store.map((item, index) => {
        return <StoreCard item={item} pos={index} key={index}></StoreCard>
      })}
    </div>
  )
}

export default StoreSection
