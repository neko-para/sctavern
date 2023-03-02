import { playerContext } from './Context'
import StoreCard from './StoreCard'
import './index.css'

function StoreSection() {
  const player = useContext(playerContext)
  return (
    <div className="StoreSection">
      {[
        ...player.store,
        ...Array.from({ length: 6 - player.store.length }, () => undefined),
      ].map((item, index) => {
        return item !== undefined ? (
          <StoreCard
            item={item}
            pos={index}
            key={index}
            lock={player.locked}
          ></StoreCard>
        ) : (
          <div key={index} className="SmallCard"></div>
        )
      })}
    </div>
  )
}

export default StoreSection
