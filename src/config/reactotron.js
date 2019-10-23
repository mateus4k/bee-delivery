import Reactotron, { overlay } from 'reactotron-react-native'

console.tron = Reactotron.configure()
  .useReactNative()
  .use(overlay())
  .connect()
