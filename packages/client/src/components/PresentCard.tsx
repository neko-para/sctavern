import { UnitKey } from '@sctavern/data'
import type { PresentItemState } from '@sctavern/emulator'
import { useContext } from 'react'
import Button from './Button'
import CardView from './CardView'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'

export interface Props {
  item: PresentItemState
  pos: number
}

function countUnit(units: UnitKey[]): string[] {
  const res: Partial<Record<UnitKey, number>> = {}
  units.forEach(u => {
    res[u] = (res[u] ?? 0) + 1
  })
  return (Object.keys(res) as UnitKey[]).map(u => `${u}: ${res[u]}`)
}

function PresentCard(props: Props) {
  const client = useContext(clientContext)
  return (
    <CardView disable={!props.item.card}>
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
            <div className="flex-column">
              {props.item.card.notes.map((s, index) => (
                <span key={index}>{s}</span>
              ))}
            </div>
            <div className="flex-grow"></div>
            <div className="flex-column">
              {countUnit(props.item.card.units).map((s, index) => (
                <span className="Hint" key={index}>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex">
              <span>
                {props.item.card.units.length} /{' '}
                {props.item.card.config.MaxUnit}
              </span>
              <div className="flex-grow"></div>
              <span>
                {props.item.card.upgrades.length} /{' '}
                {props.item.card.config.MaxUpgrade}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex-grow"></div>
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
    </CardView>
  )
}

export default PresentCard
