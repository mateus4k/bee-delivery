import React from 'react'
import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import HeaderContainer from '../HeaderContainer'

import styles from './styles'
import { colors } from '../../styles'

const MainContainer = ({ name, children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor={colors.darkness} />
    <HeaderContainer name={name} />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.mainContainer}>{children}</View>
    </ScrollView>
  </SafeAreaView>
)

MainContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default MainContainer
