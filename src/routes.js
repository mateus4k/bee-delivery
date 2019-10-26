import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

import Home from './pages/Home'
import Review from './pages/Review'
import Notification from './pages/Notification'
import Profile from './pages/Profile'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    ForgotPassword
  }),
  createBottomTabNavigator({
    Home,
    Notification,
    Review,
    Profile
  })
)

export default Routes
