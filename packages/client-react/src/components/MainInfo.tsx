import type { Client, GameState, PlayerState } from '@sctavern/emulator'

export interface Props {
  state: GameState
  client: Client
  player: PlayerState
}

function MainInfo(props: Props) {
  return (
    <div className="flex-column">
      <span>
        {`回合 ${props.state.round} 等级 ${props.player.level} 生命 ${
          props.player.life
        } 价值 ${props.player.present
          .map(c => c.card?.value ?? 0)
          .reduce((a, b) => a + b, 0)}`}
      </span>
      <span>
        {`升级 ${props.player.upgrade_cost} 晶矿 ${props.player.mineral} / ${props.player.mineral_max} 瓦斯 ${props.player.gas} / ${props.player.gas_max}`}
      </span>
    </div>
  )
}

export default MainInfo
