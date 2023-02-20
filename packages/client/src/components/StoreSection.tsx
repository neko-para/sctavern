import { playerContext } from './Context'
import StoreCard from './StoreCard'
import { useStyle } from './style'

function StoreSection() {
  const player = useContext(playerContext)
  const style = useStyle()
  return (
    <div className={style.StoreSection}>
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
