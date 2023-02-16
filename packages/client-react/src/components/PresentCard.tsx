import type { PresentItemState } from '@sctavern/emulator'
import { useContext } from 'react'
import Button from './Button'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

export interface Props {
  item: PresentItemState
  pos: number
}

function PresentCard(props: Props) {
  const client = useContext(clientContext)
  return (
    <div className="LargeCard flex-column justify-around">
      {props.item.card ? (
        <div className="flex-column flex-grow">
          <div className="flex justify-center">
            <span className="Label">{props.item.card.name}</span>
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
              type="text"
              onClick={() => {
                client.post(act.msg)
              }}
              disable={!act.enable}
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
