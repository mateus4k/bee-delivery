import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const HeaderContainer = ({ name }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{name}</Text>
  </View>
)

HeaderContainer.propTypes = {
  name: PropTypes.string.isRequired
}

export default HeaderContainer
