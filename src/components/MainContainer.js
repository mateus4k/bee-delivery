import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native'

import HeaderContainer from './HeaderContainer'

export default MainContainer = ({ name, children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar translucent backgroundColor={'#202020'} />
    <ScrollView>
      <HeaderContainer name={name} />
      <View style={styles.mainContainer}>{children}</View>
    </ScrollView>
  </SafeAreaView>
)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#202020' },

  mainContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -10,
    backgroundColor: '#fff'
  }
})
