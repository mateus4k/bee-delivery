import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

import Home from './pages/Home'
import Review from './pages/Review'
import Notification from './pages/Notification'
import Profile from './pages/Profile'

const GuestAreaNavigator = createStackNavigator({
  Login,
  Register,
  ForgotPassword
})

const RestrictAreaNavigator = createBottomTabNavigator({
  Home,
  Notification,
  Review,
  Profile
})

const Routes = createSwitchNavigator(
  {
    GuestAreaNavigator,
    RestrictAreaNavigator
  },
  {
    initialRouteName: 'GuestAreaNavigator'
  }
)

export default createAppContainer(Routes)
