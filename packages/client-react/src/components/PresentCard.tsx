import type { Client, PresentItemState } from '@sctavern/emulator'
import Button from './Button'
import './PresentCard.css'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

export interface Props {
  client: Client
  item: PresentItemState
  pos: number
}

function PresentCard(props: Props) {
  return (
    <div className="PresentCard flex-column justify-around">
      {props.item.card ? (
        <div className="flex-column flex-grow">
          <div className="flex justify-center">
            <span>{props.item.card.name}</span>
          </div>
          <div className="flex align-center">
            <RaceIcon race={props.item.card.race}></RaceIcon>
            <span>{props.item.card.level}</span>
            <div className="flex-grow"></div>
            <span>{props.item.card.value}</span>
          </div>
          <div className="flex-grow"></div>
        </div>
      ) : (
        []
      )}
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
}

export default PresentCard
