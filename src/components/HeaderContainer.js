import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

const HeaderContainer = ({ name }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 5 : 30,
    paddingBottom: 10
  },

  headerText: {
    fontWeight: '600',
    fontSize: 22,
    color: '#fff'
  }
})

export default HeaderContainer
