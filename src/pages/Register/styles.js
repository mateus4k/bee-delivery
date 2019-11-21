import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fd0',
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
    backgroundColor: '#ddd'
  },

  form: {
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: -50,
    shadowColor: '#000',
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ccc',
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
    backgroundColor: '#fd0',
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    textTransform: 'uppercase',
    color: '#333',
    fontWeight: '600'
  },

  termsOfUseContainer: {
    justifyContent: 'center',
    marginVertical: 15
  },

  termsOfUseText: {
    color: '#777',
    marginRight: 2,
    fontSize: 14,
    textAlign: 'center'
  },

  termsOfUseButtonText: {
    color: '#fd0',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default styles
