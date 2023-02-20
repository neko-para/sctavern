import { clientContext, playerContext } from './Context'
import { tr } from './tr'

function GlobalAction() {
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  const role = player.role
  return (
    <div className="flex gap">
      {player.action.map((act, index) => {
        return (
          <Button
            variant="contained"
            key={index}
            onClick={() => client.post(act.msg)}
            disabled={!act.enable}
          >
            {act.action === 'ability'
              ? role.ability +
                (role.progress
                  ? role.progress.max === -1
                    ? ` ${role.progress.cur}`
                    : ` ${role.progress.cur} / ${role.progress.max}`
                  : '')
              : tr[act.action]}
          </Button>
        )
      })}
    </div>
  )
}

export default GlobalAction
