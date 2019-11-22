import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkness
  },

  scrollContainer: {
    backgroundColor: colors.darkness
  },

  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.white,
    paddingBottom: 5
  }
})

export default styles
