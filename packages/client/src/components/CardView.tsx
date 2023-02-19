import { PropsWithChildren } from 'react'
import HoverLayer from './HoverLayer'
import './CardView.css'

export interface Props {
  disable?: boolean
}

function CardView(props: PropsWithChildren<Props>) {
  return (
    <HoverLayer disable={props.disable ?? false}>
      <div className="CardView">{props.children}</div>
    </HoverLayer>
  )
}

export default CardView
