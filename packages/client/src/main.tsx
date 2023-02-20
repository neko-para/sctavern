import React from 'react'
import ReactDOM from 'react-dom'
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom'
import LocalGame from './view/LocalGame'
import './index.css'
import './util.css'
import LocalConfig from './view/LocalConfig'

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

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
