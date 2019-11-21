import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: 'rgba(255, 200, 0, 1)',
    position: 'relative',
    flex: 1
  },

  backgroundOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 200, 0, 0.90)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    textTransform: 'uppercase',
    color: '#ddd',
    fontWeight: '600'
  },

  version: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#fff'
  },

  externalLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  externalLinksText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500'
  },

  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginRight: 10
  },

  forgotPasswordText: {
    color: '#fff',
    fontSize: 15
  },

  errorContainer: {
    flex: 1,
    backgroundColor: '#0008',
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 14,
    alignItems: 'center'
  },

  errorText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  }
})

export default styles
