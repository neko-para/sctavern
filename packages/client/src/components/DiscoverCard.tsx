import type { DiscoverItem } from '@sctavern/emulator'
import { clientContext } from './Context'
import SmallCard from './SmallCard'

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

function DiscoverCard(props: Props) {
  const client = useContext(clientContext)
  if (props.item) {
    return (
      <SmallCard
        race={props.item.type === 'card' ? props.item.card.race : undefined}
        title={getName(props.item)}
        className="NotSelected"
      >
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
      </SmallCard>
    )
  } else {
    return <SmallCard title="" className="NotSelected"></SmallCard>
  }
}

export default DiscoverCard
