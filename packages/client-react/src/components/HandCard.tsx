import { CardData } from '@sctavern/data'
import type { HandItemState } from '@sctavern/emulator'
import { useContext } from 'react'
import Button from './Button'
import { clientContext } from './Context'
import './HandCard.css'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

export interface Props {
  item: HandItemState | null
  pos: number
}

function HandCard(props: Props) {
  const client = useContext(clientContext)
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
                  client.post(act.msg)
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
    return <div className="HandCard"></div>
  }
}

export default HandCard
