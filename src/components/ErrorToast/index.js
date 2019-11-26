import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const ErrorToast = ({ error = null }) => (
  <>
    {!!error && (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    )}
  </>
)

ErrorToast.propTypes = {
  error: PropTypes.string
}

export default ErrorToast
