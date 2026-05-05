import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
import i18n from './i18n/i18n'
// import App from './Components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={Store}>

      <App />
    </Provider>
  </React.StrictMode>,
)
