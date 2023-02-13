import { GameState } from "@sctavern/emulator";

export interface Props {
  state: GameState
}

function GameInstance(props: Props) {
  return <div>
    {JSON.stringify(props.state)}
  </div>
}

export default GameInstance
