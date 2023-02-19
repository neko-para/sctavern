import { PropsWithChildren } from 'react'
import HoverLayer from './HoverLayer'
import './CardView.css'

export interface Props {
  disable?: boolean
  color?: string
}

function CardView(props: PropsWithChildren<Props>) {
  return (
    <HoverLayer disable={props.disable ?? false}>
      <div className={'CardView ' + props.color ?? ''}>{props.children}</div>
    </HoverLayer>
  )
}

export default CardView
