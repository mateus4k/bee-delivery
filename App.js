import React, { Component } from 'react'
import Routes from './src/routes'

// class App extends Component {
//   render() {
//     return <Routes />
//   }
// }

// const OverlayApp = console.tron.overlay(App)

// export default OverlayApp

import './src/config/reactotron'

class App extends Component {
  render() {
    return <Routes />
  }
}

const OverlayApp = console.tron.overlay(App)

export default OverlayApp
