import { playerContext } from './Context'
import PresentCard from './PresentCard'
import { useStyle } from './style'

function PresentSection() {
  const player = useContext(playerContext)
  const style = useStyle()
  return (
    <div className={style.PresentSection}>
      {player.present.map((item, index) => {
        return <PresentCard item={item} pos={index} key={index}></PresentCard>
      })}
    </div>
  )
}

export default PresentSection
