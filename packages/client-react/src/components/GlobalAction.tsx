import { useContext } from 'react'
import Button from './Button'
import { clientContext, playerContext } from './Context'
import { tr } from './tr'

function GlobalAction() {
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  return (
    <div className="flex gap">
      {player.action.map((act, index) => {
        return (
          <Button
            key={index}
            onClick={() => client.post(act.msg)}
            disable={!act.enable}
          >
            {act.action === 'ability' ? '魂姿' : tr[act.action]}
          </Button>
        )
      })}
    </div>
  )
}

export default GlobalAction
