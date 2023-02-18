import HandSection from './HandSection'
import MainInfo from './MainInfo'
import PresentSection from './PresentSection'
import StoreSection from './StoreSection'
import { useContext } from 'react'
import { clientContext, gameContext, playerContext } from './Context'
import GlobalAction from './GlobalAction'

function GameInstance() {
  const player =
    useContext(gameContext).player[useContext(clientContext).pos] ?? null
  if (player) {
    return (
      <playerContext.Provider value={player}>
        <div className="GameInstance flex-column gap">
          <div className="flex gap">
            <div className="flex-column gap">
              <MainInfo></MainInfo>
              <HandSection></HandSection>
            </div>
            <div className="flex-column">
              <StoreSection></StoreSection>
              <div className="flex-grow"></div>
              <GlobalAction></GlobalAction>
            </div>
          </div>
          <PresentSection></PresentSection>
        </div>
      </playerContext.Provider>
    )
  } else {
    return <div></div>
  }
}

export default GameInstance
