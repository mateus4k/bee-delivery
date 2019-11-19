import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

import Home from './pages/Home'
import Zone from './pages/Zone'
import Review from './pages/Review'
import Notification from './pages/Notification'
import Profile from './pages/Profile'

const GuestAreaNavigator = createStackNavigator({
  Login,
  Register,
  ForgotPassword
})

const RestrictAreaNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Início',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
            size={30}
            color={tintColor}
          />
        )
      })
    },
    Zone: {
      screen: Zone,
      navigationOptions: () => ({
        title: 'Zonas',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
            size={30}
            color={tintColor}
          />
        )
      })
    },
    Review: {
      screen: Review,
      navigationOptions: () => ({
        title: 'Avaliações',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
            size={30}
            color={tintColor}
          />
        )
      })
    },
    Notification: {
      screen: Notification,
      navigationOptions: () => ({
        title: 'Avisos',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={
              Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'
            }
            size={30}
            color={tintColor}
          />
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
            size={30}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#fd0',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#202020'
      }
    }
  }
)

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
