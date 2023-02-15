import { PropsWithChildren, useRef, useEffect, useState } from 'react'
import './AutoAdapt.css'

export interface Props {}

function AutoAdapt(props: PropsWithChildren<Props>) {
  const orientation = useRef(matchMedia('(orientation: portrait)'))
  const checkPC = useRef(
    matchMedia(`(orientation: landscape) and (min-height: 900px) and (min-width: 1600px),
  (orientation: portrait) and (min-width: 900px) and (min-height: 1600px)`)
  )
  const checkPad = useRef(
    matchMedia(`(orientation: landscape) and (min-height: 500px) and (min-width: 1000px),
  (orientation: portrait) and (min-width: 500px) and (min-height: 1000px)`)
  )

  const detectDevice = () => {
    return checkPC.current.matches
      ? 'PC'
      : checkPad.current.matches
      ? 'Pad'
      : 'Mobile'
  }

  const [portrait, setPortrait] = useState(orientation.current.matches)
  const [device, setDevice] = useState<'Mobile' | 'Pad' | 'PC'>(detectDevice())

  useEffect(() => {
    const f = () => {
      setPortrait(orientation.current.matches)
    }
    orientation.current.addEventListener('change', f)
    return () => {
      orientation.current.removeEventListener('change', f)
    }
  })

  useEffect(() => {
    const f = () => {
      setDevice(detectDevice())
    }
    checkPC.current.addEventListener('change', f)
    checkPad.current.addEventListener('change', f)
    return () => {
      checkPC.current.removeEventListener('change', f)
      checkPad.current.removeEventListener('change', f)
    }
  })

  const classes = ['AutoAdapt']
  classes.push(portrait ? 'Portrait' : 'Landscape')
  switch (device) {
    case 'Pad':
      classes.push('Pad')
    case 'Mobile':
      classes.push('Mobile')
      break
    case 'PC':
      classes.push('PC')
      break
  }

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default AutoAdapt
