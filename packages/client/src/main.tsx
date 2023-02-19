import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AutoAdapt from '@/ui/AutoAdapt'
import DialogLayer from '@/ui/DialogLayer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AutoAdapt>
      <App></App>
      <DialogLayer></DialogLayer>
    </AutoAdapt>
  </React.StrictMode>
)
