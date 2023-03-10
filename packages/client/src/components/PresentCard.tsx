import type { UnitKey } from '@sctavern/data'
import type { PresentItemState } from '@sctavern/emulator'
import { clientContext, playerContext } from './Context'
import RaceIcon from './RaceIcon'
import { tr } from './tr'
import PresentCardInfo from './PresentCardInfo'
import { PresetColor } from '@/color'

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

function calcColor(color?: 'normal' | 'amber' | 'red' | 'gold') {
  if (!color || color === 'normal') {
    return ''
  }
  switch (color) {
    case 'amber':
      return 'Amber'
    case 'red':
      return 'Red'
    case 'gold':
      return 'Gold'
  }
}

function PresentCard(props: Props) {
  const client = useContext(clientContext)
  const player = useContext(playerContext)
  const [showInfo, setShowInfo] = useState(false)
  const color = calcColor(props.item.card?.color)
  const selected =
    player.selected.area === 'present' && player.selected.place === props.pos
  return (
    <CardView
      className={selected ? 'Selected' : 'NotSelected'}
      style={{
        backgroundColor: color ? PresetColor[color] : '',
      }}
      onClick={() => {
        if (props.item.card) {
          client.autoPost({
            msg: '$select',
            area: 'present',
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
                color="inherit"
                variant="text"
                onClick={ev => {
                  setShowInfo(true)
                  ev.stopPropagation()
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
        </div>
      </div>
    </CardView>
  )
}

export default PresentCard
