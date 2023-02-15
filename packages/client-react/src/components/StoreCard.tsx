import { CardData } from '@sctavern/data'
import type { Client, StoreItemState, PlayerState } from '@sctavern/emulator'
import Button from './Button'
import RaceIcon from './RaceIcon'
import './StoreCard.css'
import { tr } from './tr'

export interface Props {
  client: Client
  item: StoreItemState | null
  pos: number
}

function StoreCard(props: Props) {
  if (props.item) {
    return (
      <div className="StoreCard flex-column justify-around">
        <div className="flex align-center flex-grow">
          <RaceIcon race={CardData[props.item.card].race}></RaceIcon>
          <span className="flex-grow">{props.item.card}</span>
        </div>
        <div className="flex justify-around">
          {props.item.actions.map((act, index) => {
            return (
              <Button
                onClick={() => {
                  props.client.post(act.msg)
                }}
                key={index}
              >
                {tr[act.action]}
              </Button>
            )
          })}
        </div>
      </div>
    )
  } else {
    return <div className="StoreCard"></div>
  }
}

export default StoreCard
