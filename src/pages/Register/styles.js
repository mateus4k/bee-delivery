import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../styles'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 200,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 60,
    alignItems: 'center'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lighter
  },

  form: {
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    marginTop: -50,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  },

  title: {
    fontWeight: '400',
    fontSize: 20
  },

  textBold: {
    fontWeight: '600'
  },

  subtitle: {
    fontWeight: '400',
    fontSize: 18
  },

  inputText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.whiteTransparent,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.light,
    paddingVertical: 14,
    paddingHorizontal: 50,
    marginVertical: 6,
    fontSize: 16
  },

  inputContainer: {
    justifyContent: 'center'
  },

  icons: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },

  button: {
    height: 60,
    borderRadius: 40,
    backgroundColor: colors.primary,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    textTransform: 'uppercase',
    color: colors.darker,
    fontWeight: '600'
  },

  termsOfUseContainer: {
    justifyContent: 'center',
    marginVertical: 15
  },

  termsOfUseText: {
    color: colors.dark,
    marginRight: 2,
    fontSize: 14,
    textAlign: 'center'
  },

  termsOfUseButtonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default styles
