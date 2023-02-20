import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom'
import LocalGame from './view/LocalGame'
import './index.css'
import './util.css'
import LocalConfig from './view/LocalConfig'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import * as Color from '@mui/material/colors'

const router = createHashRouter([
  {
    path: '/',
    loader: () => {
      return redirect('/local/config')
    },
  },
  {
    path: '/local/config',
    element: <LocalConfig></LocalConfig>,
  },
  {
    path: '/local/play',
    element: <LocalGame></LocalGame>,
  },
])

const theme = createTheme({
  palette: {
    primary: Color.deepPurple,
    info: Color.brown,
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
