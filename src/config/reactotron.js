import Reactotron, { overlay } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.0.2' })
    .use(reactotronRedux())
    .useReactNative()
    .use(sagaPlugin())
    .use(overlay())
    .connect()

  tron.clear()

  console.tron = tron
}
