import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyle = makeStyles(() =>
  createStyles({
    PresentCardInfo: {
      display: 'flex',
      gap: '4px',
    },
    DiscoverSection: {
      display: 'grid',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '4px',
    },
    PresentSection: {
      display: 'flex',
      gap: '4px',
    },
    HandSection: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoFlow: 'column',
      gap: '4px',
    },
    StoreSection: {
      display: 'grid',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '4px',
    },
  })
)
