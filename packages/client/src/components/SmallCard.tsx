import { PresetColor } from '@/color'
import type { Race } from '@sctavern/data'
import { PropsWithChildren } from 'react'
import RaceIcon from './RaceIcon'
import './index.css'

export interface Props {
  race?: Race
  title: string
  color?: keyof typeof PresetColor | ''
}

function SmallCard(props: PropsWithChildren<Props>) {
  return (
    <CardView
      className="flex-column SmallCard"
      style={{
        backgroundColor: props.color ? PresetColor[props.color] : '',
      }}
    >
      <div
        className="flex flex-grow justify-center align-center"
        style={{
          position: 'relative',
        }}
      >
        {props.race && (
          <div className="RaceIconWrapper">
            <RaceIcon race={props.race}></RaceIcon>
          </div>
        )}
        <span className="Label justify-center">{props.title}</span>
      </div>
      <div className="flex justify-around">{props.children}</div>
    </CardView>
  )
}

export default SmallCard
