import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native'

import HeaderContainer from './HeaderContainer'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020'
  },

  scrollContainer: {
    backgroundColor: '#202020'
  },

  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
    paddingBottom: 5
  }
})
