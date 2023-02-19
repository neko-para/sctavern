import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom'
import LocalGame from './view/LocalGame'
import AutoAdapt from '@/ui/AutoAdapt'
import DialogLayer from '@/ui/DialogLayer'
import './index.css'
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AutoAdapt>
      <RouterProvider router={router} />
      <DialogLayer></DialogLayer>
    </AutoAdapt>
  </React.StrictMode>
)
