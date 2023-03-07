import { CardData } from '@sctavern/data'
import type { HandItemState } from '@sctavern/emulator'
import { clientContext } from './Context'
import SmallCard from './SmallCard'
import { tr } from './tr'

export interface Props {
  item: HandItemState | null
  pos: number
}

function HandCard(props: Props) {
  const client = useContext(clientContext)
  if (props.item) {
    return (
      <SmallCard
        race={CardData[props.item.card].race}
        title={props.item.card}
        className="NotSelected"
      >
        {props.item.actions.map((act, index) => {
          return (
            <Button
              variant="text"
              onClick={ev => {
                client.post(act.msg)
                ev.stopPropagation()
              }}
              disabled={!act.enable}
              key={index}
            >
              {tr[act.action]}
            </Button>
          )
        })}
      </SmallCard>
    )
  } else {
    return <SmallCard title="" className="NotSelected"></SmallCard>
  }
}

export default HandCard
