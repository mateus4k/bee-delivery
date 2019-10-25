import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    ForgotPassword
  })
)

export default Routes
