import type { PresentItemState } from '@sctavern/emulator'
import { countUnit } from './PresentCard'
import RaceIcon from './RaceIcon'
import { useStyle } from './style'

export interface Props {
  item: PresentItemState
  show: boolean
  setShow: (s: boolean) => void
}

function PresentCardInfo(props: Props) {
  const style = useStyle()

  if (props.item.card) {
    return (
      <Dialog
        fullWidth
        maxWidth="lg"
        open={props.show}
        onClose={() => props.setShow(false)}
      >
        <DialogContent className={'InfoCard ' + style.PresentCardInfo}>
          <div className="flex-column flex-2">
            <span className="Label">{props.item.card.name}</span>
            <div className="flex align-center">
              <RaceIcon race={props.item.card.race}></RaceIcon>
              <span>{props.item.card.level}</span>
              <div className="flex-grow"></div>
              <span>{props.item.card.value}</span>
            </div>
            {props.item.card.descs.map((desc, index) => {
              return <span key={index}>{desc}</span>
            })}
            {props.item.card.notes.map((note, index) => {
              return <span key={index}>{note}</span>
            })}
          </div>
          <div className="flex-column flex-1">
            <span className="Label">
              单位 {props.item.card.units.length} /{' '}
              {props.item.card.config.MaxUnit}
            </span>
            {countUnit(props.item.card.units).map((unit, index) => {
              return <span key={index}>{unit}</span>
            })}
          </div>
          <div className="flex-column flex-1">
            <span className="Label">
              升级 {props.item.card.upgrades.length} /{' '}
              {props.item.card.config.MaxUpgrade}
            </span>
            {props.item.card.upgrades.map((upg, index) => {
              return <span key={index}>{upg}</span>
            })}
          </div>
        </DialogContent>
      </Dialog>
    )
  } else {
    return <div></div>
  }
}

export default PresentCardInfo
