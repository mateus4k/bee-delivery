import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 150,
    alignSelf: 'center',
    height: Dimensions.get('window').height - 80
  }
})

export default styles
