import React from 'react'

import { Image } from 'react-native'

import Logo from '../../assets/logo.png'
import MainContainer from '../../components/MainContainer'

import styles from './styles'

const Home = () => (
  <MainContainer name='Início'>
    <Image source={Logo} style={styles.logo} resizeMode='center' />
  </MainContainer>
)

export default Home
