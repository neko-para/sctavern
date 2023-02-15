import type { Race } from '@sctavern/data'
import RacePng from '../res/Race'
import './RaceIcon.css'

export interface Props {
  race: Race
}

function RaceIcon(props: Props) {
  return (
    <div className="RaceIcon flex align-center justify-center">
      <img src={RacePng[props.race]}></img>
    </div>
  )
}

export default RaceIcon
