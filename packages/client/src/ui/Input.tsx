import { useRef } from 'react'
import './Input.css'

export interface Props {
  class?: string[]
  value: string
  setValue: (value: string) => void
  type?: 'text' | 'number'
}

function Input(props: Props) {
  const el = useRef<HTMLInputElement | null>(null)
  return (
    <div className={'InputWrapper ' + props.class?.join(' ') ?? ''}>
      <input
        className="Input"
        ref={el}
        type={props.type}
        value={props.value}
        onChange={() => {
          const v = el.current?.value
          props.setValue(v ?? '')
        }}
      ></input>
    </div>
  )
}

export default Input
