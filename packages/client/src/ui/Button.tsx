import { PropsWithChildren } from 'react'
import './Button.css'
import HoverLayer from './HoverLayer'

export interface Props {
  class?: string[]
  onClick?: () => void
  type?: 'text' | 'flat'
  disable?: boolean
}

function Button(props: PropsWithChildren<Props>) {
  const classes: string[] = ['Button', `Button_${props.type ?? 'flat'}`]
  if (props.disable) {
    classes.push('Button_disabled')
  }
  classes.concat(props.class ?? [])
  return (
    <HoverLayer>
      <div
        className={classes.join(' ')}
        onClick={props.disable ? () => {} : props.onClick}
      >
        <span className="flex justify-center">{props.children}</span>
      </div>
    </HoverLayer>
  )
}

export default Button
