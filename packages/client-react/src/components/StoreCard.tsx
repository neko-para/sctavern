import { CardData } from '@sctavern/data'
import type { StoreItemState } from '@sctavern/emulator'
import { useContext } from 'react'
import Button from './Button'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

export interface Props {
  item: StoreItemState | null
  pos: number
}

function StoreCard(props: Props) {
  const client = useContext(clientContext)
  if (props.item) {
    return (
      <div className="SmallCard flex-column justify-around">
        <div className="flex align-center flex-grow">
          <RaceIcon race={CardData[props.item.card].race}></RaceIcon>
          <span className="flex-grow Label">{props.item.card}</span>
        </div>
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
  } else {
    return <div className="SmallCard"></div>
  }
}

export default StoreCard
