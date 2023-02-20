import type { DiscoverItem } from '@sctavern/emulator'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'

export interface Props {
  item: DiscoverItem
  pos: number
}

function getName(item: DiscoverItem) {
  switch (item.type) {
    case 'card':
      return item.card.name
    case 'upgrade':
      return item.upgrade.name
    case 'prophesy':
      return item.prophesy.name
    case 'custom':
      return item.str
  }
}

function StoreCard(props: Props) {
  const client = useContext(clientContext)
  if (props.item) {
    return (
      <CardView>
        <div className="SmallCard flex-column justify-around">
          <div className="flex align-center flex-grow">
            {props.item.type === 'card' && (
              <RaceIcon race={props.item.card.race}></RaceIcon>
            )}
            <span className="flex-grow Label">{getName(props.item)}</span>
          </div>
          <div className="flex justify-around">
            <Button
              variant="text"
              onClick={() => {
                client.autoPost({
                  msg: '$choice',
                  place: props.pos,
                  category: 'discover',
                })
              }}
            >
              这个
            </Button>
          </div>
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
