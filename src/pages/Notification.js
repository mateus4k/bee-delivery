import React from 'react'

import { Image, StyleSheet, Dimensions } from 'react-native'

import Logo from '../assets/logo.png'
import MainContainer from '../components/MainContainer'

const Notification = () => (
  <MainContainer name='Avisos'>
    <Image source={Logo} style={styles.logo} resizeMode='center' />
  </MainContainer>
)

export default Notification

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 150,
    alignSelf: 'center',
    height: Dimensions.get('window').height - 80
  }
})
