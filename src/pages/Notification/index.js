import React from 'react'

import { Image } from 'react-native'

import Logo from '../../assets/logo.png'
import MainContainer from '../../components/MainContainer'

import styles from './styles'

const Notification = () => (
  <MainContainer name='Avisos'>
    <Image source={Logo} style={styles.logo} resizeMode='center' />
  </MainContainer>
)

export default Notification
