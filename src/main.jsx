import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
// import App from './Components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={Store}>

      <App />
    </Provider>
  </StrictMode>,
)
