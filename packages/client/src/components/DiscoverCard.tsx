import { CardData } from '@sctavern/data'
import type { DiscoverItem } from '@sctavern/emulator'
import { useContext } from 'react'
import Button from './Button'
import CardView from './CardView'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

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
              type="text"
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
      <CardView disable={true}>
        <div className="SmallCard"></div>
      </CardView>
    )
  }
}

export default StoreCard
