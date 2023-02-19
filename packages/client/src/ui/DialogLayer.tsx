import { useEffect, useRef } from 'react'
import { globalEl } from './Context'
import './DialogLayer.css'

function DialogLayer() {
  const layer = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    globalEl.dialogLayer = layer.current
    return () => {
      globalEl.dialogLayer = null
    }
  })
  return <div className="DialogLayer" ref={layer}></div>
}

export default DialogLayer
