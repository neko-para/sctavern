import { ReactNode } from 'react'

export interface Props {
  general: ReactNode
  abilitys: ReactNode[]
  control: ReactNode
}

function GlobalActionSection(props: Props) {
  return (
    <Grid container gap={1}>
      {props.general}
      {props.abilitys}
      {props.control}
    </Grid>
  )
}

export default GlobalActionSection
