import HandSection from './HandSection'
import MainInfo from './MainInfo'
import PresentSection from './PresentSection'
import StoreSection from './StoreSection'
import './GameInstance.css'
import { useContext } from 'react'
import { clientContext, gameContext, playerContext } from './Context'

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
            <StoreSection></StoreSection>
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
