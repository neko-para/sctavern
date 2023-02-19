import type { PropsWithChildren } from 'react'
import './HoverLayer.css'

export interface Props {
  disable?: boolean
  onClick?: () => void
}

function HoverLayer(props: PropsWithChildren<Props>) {
  const classes = ['HoverLayer']
  if (props.disable) {
    classes.push('HoverLayer_disabled')
  }
  return (
    <div className={classes.join(' ')} onClick={props.onClick}>
      <div className="Layer"></div>
      {props.children}
    </div>
  )
}

export default HoverLayer
