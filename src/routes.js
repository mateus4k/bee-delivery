import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    ForgotPassword
  })
)

export default Routes
