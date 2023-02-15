import type { Client, PlayerState } from '@sctavern/emulator'
import StoreCard from './StoreCard'

export interface Props {
  client: Client
  player: PlayerState
}

function StoreSection(props: Props) {
  return (
    <div className="flex gap">
      {props.player.store.map((item, index) => {
        return (
          <StoreCard
            item={item}
            client={props.client}
            pos={index}
            key={index}
          ></StoreCard>
        )
      })}
    </div>
  )
}

export default StoreSection
