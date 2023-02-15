import { Client, PlayerState } from '@sctavern/emulator'
import PresentCard from './PresentCard'
import './PresentSection.css'

export interface Props {
  player: PlayerState
  client: Client
}

function PresentSection(props: Props) {
  return (
    <div className="PresentSection">
      {props.player.present.map((item, index) => {
        return (
          <PresentCard
            item={item}
            client={props.client}
            pos={index}
            key={index}
          ></PresentCard>
        )
      })}
    </div>
  )
}

export default PresentSection
