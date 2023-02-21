import { Wrapper } from '@sctavern/emulator'

export interface Props {
  wrapper: Wrapper
}

function Control(props: Props) {
  const [saveState, setSaveState] = useState(props.wrapper.getState())
  useEffect(() => {
    props.wrapper.saveStateChanged = () => {
      setSaveState(props.wrapper.getState())
    }
    return () => {
      props.wrapper.saveStateChanged = () => {}
    }
  }, [])

  return (
    <Fragment>
      <Button
        onClick={() => {
          props.wrapper.undo()
        }}
        disabled={!saveState.canUndo}
      >
        撤销
      </Button>
      <Button
        onClick={() => {
          props.wrapper.redo()
        }}
        disabled={!saveState.canRedo}
      >
        重做
      </Button>
    </Fragment>
  )
}

export default Control
