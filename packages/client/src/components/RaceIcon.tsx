import type { Race } from '@sctavern/data'
import RacePng from '../res/Race'

export interface Props {
  race: Race
}

function RaceIcon(props: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
      }}
    >
      <img
        src={RacePng[props.race]}
        style={{
          width: '36px',
          height: '36px',
          objectFit: 'scale-down',
        }}
      ></img>
    </div>
  )
}

export default RaceIcon
