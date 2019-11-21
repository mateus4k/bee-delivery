import { StyleSheet, Platform } from 'react-native'

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

export default styles
