import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './components/app'
import './style.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter basename="/advicine">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
