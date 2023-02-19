import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { globalEl } from './Context'
import './Dialog.css'

export interface Props {
  show: boolean
  setShow?: (show: boolean) => void
}

function Dialog(props: PropsWithChildren<Props>) {
  return globalEl.dialogLayer && props.show ? (
    createPortal(
      <div className="DialogContainer">
        <div
          className="DialogOverlay"
          onClick={() => {
            if (props.setShow) {
              props.setShow(false)
            }
          }}
        ></div>
        <div className="DialogContent">{props.children}</div>
      </div>,
      globalEl.dialogLayer
    )
  ) : (
    <div></div>
  )
}

export default Dialog
