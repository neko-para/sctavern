import HandSection from './HandSection'
import MainInfo from './MainInfo'
import PresentSection from './PresentSection'
import StoreSection from './StoreSection'
import { clientContext, gameContext, playerContext } from './Context'
import GlobalAction from './GlobalAction'
import DiscoverSection from './DiscoverSection'
import { PropsWithChildren } from 'react'
import GlobalActionSection from './GlobalActionSection'

function GameInstance(props: PropsWithChildren<{}>) {
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
            <div className="flex-column gap">
              <StoreSection></StoreSection>
              <DiscoverSection></DiscoverSection>
              <div className="flex-grow"></div>
              <GlobalAction layout={GlobalActionSection}></GlobalAction>
            </div>
            {props.children}
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
