import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 14,
    alignItems: 'center'
  },

  errorText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15
  }
})

export default styles
