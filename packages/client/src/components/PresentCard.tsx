import type { UnitKey } from '@sctavern/data'
import type { PresentItemState } from '@sctavern/emulator'
import { clientContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'
import PresentCardInfo from './PresentCardInfo'

export interface Props {
  item: PresentItemState
  pos: number
}

export function countUnit(units: UnitKey[]): string[] {
  const res: Partial<Record<UnitKey, number>> = {}
  units.forEach(u => {
    res[u] = (res[u] ?? 0) + 1
  })
  return (Object.keys(res) as UnitKey[]).map(u => `${u}: ${res[u]}`)
}

function calcColor(color?: 'normal' | 'amber' | 'gold') {
  if (!color || color === 'normal') {
    return ''
  }
  switch (color) {
    case 'amber':
      return 'Amber'
    case 'gold':
      return 'Gold'
  }
}

function PresentCard(props: Props) {
  const client = useContext(clientContext)
  const [showInfo, setShowInfo] = useState(false)
  return (
    <CardView color={calcColor(props.item.card?.color)}>
      <div className="LargeCard flex-column justify-around">
        {props.item.card ? (
          <div className="flex-column flex-grow">
            <div className="flex justify-center">
              <PresentCardInfo
                item={props.item}
                show={showInfo}
                setShow={setShowInfo}
              ></PresentCardInfo>
              <Button
                variant="text"
                onClick={() => {
                  setShowInfo(true)
                }}
              >
                <span className="Label">{props.item.card.name}</span>
              </Button>
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
            <div className="flex">
              <div className="flex-column">
                {countUnit(props.item.card.units).map((s, index) => (
                  <span className="Hint" key={index}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex-grow"></div>
              <div className="flex-column">
                {props.item.card.upgrades.map((upg, index) => {
                  return (
                    <span className="Hint text-align-end" key={index}>
                      {upg}
                    </span>
                  )
                })}
              </div>
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
      </div>
    </CardView>
  )
}

export default PresentCard
