import type { PropsWithChildren } from 'react'
import { clientContext, gameContext, playerContext } from './Context'
import { tr } from './tr'

function serializeRecord(record: unknown): string[] {
  if (record instanceof Array) {
    return record.map(x => x.toString())
  } else if (typeof record === 'object') {
    const rec = record as {
      [k: string]: string | number | null
    }
    return Object.keys(rec).map(key => (rec[key] ? `${key}: ${rec[key]}` : key))
  } else {
    return [(record as number | string).toString()]
  }
}

function GlobalAction(props: PropsWithChildren<{}>) {
  const game = useContext(gameContext)
  const player = useContext(playerContext)
  const client = useContext(clientContext)
  const role = player.role
  const [showInfo, setShowInfo] = useState(false)
  return (
    <Box display="flex" gap={1}>
      <Dialog open={showInfo} onClose={() => setShowInfo(false)}>
        <DialogContent>
          <Box
            display="grid"
            gridAutoFlow="column"
            gridTemplateRows="1fr 15fr"
            gap={1}
          >
            {!!player.role.record && (
              <Fragment>
                <span className="Label">角色信息</span>
                <Grid container direction="column">
                  {serializeRecord(player.role.record).map((key, index) => (
                    <span key={index}>{key}</span>
                  ))}
                </Grid>
              </Fragment>
            )}
            {game.config.Pve && (
              <Fragment>
                <span className="Label">预言信息</span>
                <Grid container direction="column">
                  {serializeRecord(player.prophesy).map((key, index) => (
                    <span key={index}>{key}</span>
                  ))}
                </Grid>
              </Fragment>
            )}
          </Box>
        </DialogContent>
      </Dialog>

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
      <Button
        variant="contained"
        onClick={() => {
          setShowInfo(true)
        }}
      >
        信息
      </Button>
      {props.children}
    </Box>
  )
}

export default GlobalAction
