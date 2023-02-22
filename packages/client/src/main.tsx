import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  redirect,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
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
import GameInstance from './components/GameInstance'
import GameInstanceMobile from './components/Mobile/GameInstanceMobile'
import GameConfig from './components/GameConfig'

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

function foward(url: string): RouteObject {
  return {
    path: url,
    loader: ({ request }) => {
      const u = new URL(request.url)
      return redirect(
        isMobile()
          ? `${url}/mobile?${u.searchParams}`
          : `${url}/pc?${u.searchParams}`
      )
    },
  }
}

const router = createHashRouter([
  {
    path: '/',
    loader: () => {
      return redirect('/local/config')
    },
  },
  {
    path: '/local/config',
    element: <LocalConfig instance={GameConfig}></LocalConfig>,
  },
  foward('/local/play'),
  {
    path: '/local/play/pc',
    element: <LocalGame instance={GameInstance}></LocalGame>,
  },
  {
    path: '/local/play/mobile',
    element: <LocalGame instance={GameInstanceMobile}></LocalGame>,
  },
])

const theme = createTheme({
  palette: {
    primary: Color.deepPurple,
    secondary: Color.red,
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
