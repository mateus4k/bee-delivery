import React from 'react'
import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native'

import HeaderContainer from '../HeaderContainer'

import styles from './styles'

const MainContainer = ({ name, children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor='#202020' />
    <HeaderContainer name={name} />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.mainContainer}>{children}</View>
    </ScrollView>
  </SafeAreaView>
)

export default MainContainer
