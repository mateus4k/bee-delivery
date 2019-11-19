import React from 'react'
import { Provider } from 'react-redux'
import Routes from './src/routes'
import * as Font from 'expo-font'

import store from './src/store'

import './src/config/reactotron'

if (process.env.NODE_ENV === 'development') {
  require('react-devtools')
}

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

const OverlayApp = console.tron.overlay(App)

Font.loadAsync({
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
})

export default OverlayApp
