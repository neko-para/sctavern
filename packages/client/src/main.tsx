import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AutoAdapt from './components/AutoAdapt'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AutoAdapt>
      <App></App>
    </AutoAdapt>
  </React.StrictMode>
)
