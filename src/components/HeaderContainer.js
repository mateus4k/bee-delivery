import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default HeaderContainer = ({ name }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20
  },

  headerText: {
    fontWeight: '600',
    fontSize: 22,
    color: '#fff'
  }
})
