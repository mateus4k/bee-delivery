import React from 'react'
import { Provider } from 'react-redux'
import Routes from './src/routes'

import store from './src/store'

import './src/config/reactotron'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

const OverlayApp = console.tron.overlay(App)

export default OverlayApp
