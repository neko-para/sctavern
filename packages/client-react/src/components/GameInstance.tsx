import type { Client, GameState } from '@sctavern/emulator'
import HandSection from './HandSection'
import MainInfo from './MainInfo'
import PresentSection from './PresentSection'
import StoreSection from './StoreSection'
import './GameInstance.css'

export interface Props {
  state: GameState
  client: Client
}

function GameInstance(props: Props) {
  const player = props.state.player[props.client.pos]
  if (player) {
    return (
      <div className="GameInstance flex-column gap">
        <div className="flex gap">
          <div className="flex-column gap">
            <MainInfo
              state={props.state}
              client={props.client}
              player={player}
            ></MainInfo>
            <HandSection player={player} client={props.client}></HandSection>
          </div>
          <StoreSection player={player} client={props.client}></StoreSection>
        </div>
        <PresentSection player={player} client={props.client}></PresentSection>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default GameInstance
