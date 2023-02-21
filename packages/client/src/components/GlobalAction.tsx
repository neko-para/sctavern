import type { PropsWithChildren } from 'react'
import { clientContext, playerContext } from './Context'
import { tr } from './tr'

function GlobalAction(props: PropsWithChildren<{}>) {
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  const role = player.role
  return (
    <Box display="flex" gap={1}>
      {player.action.map((act, index) => {
        return (
          <Button
            variant="contained"
            key={index}
            onClick={() => client.post(act.msg)}
            disabled={!act.enable}
            color={
              act.action === 'refresh' && act.special ? 'secondary' : 'primary'
            }
          >
            {tr[act.action]}
          </Button>
        )
      })}
      <Button
        variant={player.abilityAction.enable ? 'contained' : 'text'}
        onClick={() => {
          if (player.abilityAction.enable) {
            client.post(player.abilityAction.msg)
          }
        }}
        color={player.role.enhance ? 'secondary' : 'primary'}
      >
        {role.ability +
          (role.progress
            ? role.progress.max === -1
              ? ` ${role.progress.cur}`
              : ` ${role.progress.cur} / ${role.progress.max}`
            : '')}
      </Button>
      {props.children}
    </Box>
  )
}

export default GlobalAction
