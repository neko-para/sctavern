import { PropsWithChildren } from 'react'
import './Button.css'

export interface Props {
  onClick?: () => void
}

function Button(props: PropsWithChildren<Props>) {
  return (
    <div className="Button" onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
