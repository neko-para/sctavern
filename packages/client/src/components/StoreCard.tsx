import { PresetColor } from '@/color'
import { CardData } from '@sctavern/data'
import type { StoreItemState } from '@sctavern/emulator'
import { clientContext } from './Context'
import SmallCard from './SmallCard'
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
      <SmallCard
        race={CardData[props.item.card].race}
        title={props.item.card}
        color={props.lock ? 'Cyan' : ''}
        className={props.item.special ? 'Special' : 'NotSelected'}
      >
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
      </SmallCard>
    )
  } else {
    return <SmallCard title=""></SmallCard>
  }
}

export default StoreCard
