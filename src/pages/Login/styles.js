import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: colors.primaryOverlay,
    position: 'relative',
    flex: 1
  },

  backgroundOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primaryTransparent,
    position: 'absolute',
    top: 0,
    left: 0
  },

  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  logo: {
    width: 135,
    height: 135,
    marginTop: 40
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 50
  },

  inputText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.whiteTransparent,
    borderRadius: 40,
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
    backgroundColor: colors.darkTransparent,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    textTransform: 'uppercase',
    color: colors.lighter,
    fontWeight: '600'
  },

  version: {
    textAlign: 'center',
    marginVertical: 20,
    color: colors.white
  },

  externalLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  externalLinksText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: '500'
  },

  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginRight: 10
  },

  forgotPasswordText: {
    color: colors.white,
    fontSize: 15
  }
})

export default styles
