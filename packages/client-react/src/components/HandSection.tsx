import type { Client, PlayerState } from '@sctavern/emulator'
import HandCard from './HandCard'
import './HandSection.css'

export interface Props {
  client: Client
  player: PlayerState
}

function HandSection(props: Props) {
  return (
    <div className="HandSection">
      {props.player.hand.map((item, index) => {
        return (
          <HandCard
            item={item}
            client={props.client}
            pos={index}
            key={index}
          ></HandCard>
        )
      })}
    </div>
  )
}

export default HandSection
