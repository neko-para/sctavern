import { CardData } from '@sctavern/data'
import type { StoreItemState } from '@sctavern/emulator'
import { clientContext, playerContext } from './Context'
import SmallCard from './SmallCard'
import { tr } from './tr'

export interface Props {
  item: StoreItemState | null
  lock: boolean
  pos: number
}

function StoreCard(props: Props) {
  const client = useContext(clientContext)
  const player = useContext(playerContext)
  const selected =
    player.selected.area === 'store' && player.selected.place === props.pos
  if (props.item) {
    return (
      <SmallCard
        race={CardData[props.item.card].race}
        title={props.item.card}
        color={props.lock ? 'Cyan' : ''}
        className={
          props.item.special ? 'Special' : selected ? 'Selected' : 'NotSelected'
        }
        onClick={() => {
          if (props.item) {
            client.autoPost({
              msg: '$select',
              area: 'store',
              place: props.pos,
            })
          } else {
            client.autoPost({
              msg: '$select',
              area: 'none',
              place: -1,
            })
          }
        }}
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
    return <SmallCard title="" className="NotSelected"></SmallCard>
  }
}

export default StoreCard
