import { CardData } from '@sctavern/data'
import type { StoreItemState } from '@sctavern/emulator'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

export interface Props {
  item: StoreItemState | null
  lock: boolean
  pos: number
}

function StoreCard(props: Props) {
  const client = useContext(clientContext)
  if (props.item) {
    return (
      <CardView
        className="SmallCard flex-column justify-around"
        color={props.lock ? 'Cyan' : ''}
      >
        <div className="flex align-center flex-grow">
          <RaceIcon race={CardData[props.item.card].race}></RaceIcon>
          <span className="flex-grow Label">{props.item.card}</span>
        </div>
        <div className="flex justify-around">
          {props.item.actions.map((act, index) => {
            return (
              <Button
                variant="text"
                onClick={() => {
                  client.post(act.msg)
                }}
                disabled={!act.enable}
                key={index}
              >
                {tr[act.action]}
              </Button>
            )
          })}
        </div>
      </CardView>
    )
  } else {
    return (
      <CardView>
        <div className="SmallCard"></div>
      </CardView>
    )
  }
}

export default StoreCard
