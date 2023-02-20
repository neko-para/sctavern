import { PropsWithChildren } from 'react'
import './AutoAdapt.css'

export interface Props {}

function AutoAdapt(props: PropsWithChildren<Props>) {
  const orientation = useRef(matchMedia('(orientation: portrait)'))

  const [portrait, setPortrait] = useState(orientation.current.matches)
  useEffect(() => {
    const f = () => {
      setPortrait(orientation.current.matches)
    }
    orientation.current.addEventListener('change', f)
    return () => {
      orientation.current.removeEventListener('change', f)
    }
  })

  const classes = ['AutoAdapt']
  classes.push(portrait ? 'Portrait' : 'Landscape')

  return <div className={classes.join(' ')}>{props.children}</div>
}

export default AutoAdapt
