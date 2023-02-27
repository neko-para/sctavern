import { RoleState } from '@sctavern/emulator'
import type { PropsWithChildren } from 'react'
import { clientContext, gameContext, playerContext } from './Context'
import GlobalActionSection from './GlobalActionSection'
import { tr } from './tr'

export interface Props {
  layout: typeof GlobalActionSection
}

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

function createAbilityName(role: RoleState) {
  return (
    role.ability +
    (role.progress
      ? role.progress.max === -1
        ? ` ${role.progress.cur}`
        : ` ${role.progress.cur} / ${role.progress.max}`
      : '')
  )
}

function GlobalAction(props: PropsWithChildren<Props>) {
  const game = useContext(gameContext)
  const player = useContext(playerContext)
  const client = useContext(clientContext)
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
            {player.roles
              .filter(r => r.record)
              .map((role, index) => {
                return (
                  <Fragment key={index}>
                    <span className="Label">{role.name}信息</span>
                    <Grid container direction="column">
                      {serializeRecord(role.record).map((key, index) => (
                        <span key={index}>{key}</span>
                      ))}
                    </Grid>
                  </Fragment>
                )
              })}
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

      <props.layout
        general={player.action.map((act, index) => {
          return (
            <Button
              variant="contained"
              key={index}
              onClick={() => client.post(act.msg)}
              disabled={!act.enable}
              color={
                act.action === 'refresh' && act.special
                  ? 'secondary'
                  : 'primary'
              }
            >
              {tr[act.action]}
            </Button>
          )
        })}
        abilitys={player.abilityAction.map((action, index) => {
          return (
            <Button
              key={index}
              variant={action.enable ? 'contained' : 'text'}
              onClick={() => {
                if (action.enable) {
                  client.post(action.msg)
                }
              }}
              color={player.roles[index].enhance ? 'secondary' : 'primary'}
            >
              {createAbilityName(player.roles[index])}
            </Button>
          )
        })}
        control={
          <Fragment>
            <Button
              variant="contained"
              onClick={() => {
                setShowInfo(true)
              }}
            >
              信息
            </Button>
            {props.children}
          </Fragment>
        }
      ></props.layout>
    </Box>
  )
}

export default GlobalAction
