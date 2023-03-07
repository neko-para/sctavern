import { gameContext, playerContext } from './Context'

function MainInfo() {
  const state = useContext(gameContext)
  const player = useContext(playerContext)
  return (
    <div className="flex-column">
      <span>
        {`回合 ${state.round} 等级 ${player.level} 生命 ${player.life} 价值 ${player.value}`}
      </span>
      <span>
        {`升级 ${player.upgrade_cost} 晶矿 ${player.mineral} / ${player.mineral_max} 瓦斯 ${player.gas} / ${player.gas_max} 对阵 ${player.target.type}${player.target.index}`}
      </span>
    </div>
  )
}

export default MainInfo
