import { StyleSheet, Platform } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.darkness,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 5 : 30,
    paddingBottom: 10
  },

  headerText: {
    fontWeight: '600',
    fontSize: 22,
    color: colors.white
  }
})

export default styles
