import { ReactNode } from 'react'

export interface Props {
  general: ReactNode
  abilitys: ReactNode[]
  control: ReactNode
}

function GlobalActionSection(props: Props) {
  return (
    <Grid container direction="column" gap={1}>
      <Grid container gap={1}>
        {props.general}
      </Grid>
      <Grid container gap={1}>
        {props.abilitys}
      </Grid>
      <Grid container gap={1} justifyContent="flex-end">
        {props.control}
      </Grid>
    </Grid>
  )
}

export default GlobalActionSection
