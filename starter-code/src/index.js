import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bulma/css/bulma.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import MyProvider from './context'

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root')
)
registerServiceWorker()
