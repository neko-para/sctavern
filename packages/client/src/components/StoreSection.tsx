import { playerContext } from './Context'
import StoreCard from './StoreCard'
import './index.css'

function StoreSection() {
  const player = useContext(playerContext)
  return (
    <div className="StoreSection">
      {player.store.map((item, index) => {
        return (
          <StoreCard
            item={item}
            pos={index}
            key={index}
            lock={player.locked}
          ></StoreCard>
        )
      })}
    </div>
  )
}

export default StoreSection
