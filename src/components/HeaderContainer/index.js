import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const HeaderContainer = ({ name }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{name}</Text>
  </View>
)

export default HeaderContainer
