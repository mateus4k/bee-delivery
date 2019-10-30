import React, { Component, useState } from 'react'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { validateCnpj } from 'react-native-masked-text/dist/lib/masks/cnpj.mask'
import { validateCPF } from 'react-native-masked-text/dist/lib/masks/cpf.mask'
import Icon from 'react-native-vector-icons/Ionicons'

import LoginBackground from '../assets/login.png'
import Logo from '../assets/logo.png'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      document: '',
      document_type: '',
      password: ''
    }
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    AsyncStorage.getItem('@BeeDelivery:user').then(user => {
      if (user) this.props.navigation.navigate('Home')
    })
  }

  handleSubmit = async () => {
    const { document, password } = this.state
    if ((document.length === 14 || document.length === 18) && password) {
      await AsyncStorage.setItem('@BeeDelivery:user', document)
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    const { navigation } = this.props
    const { document, document_type, password } = this.state

    return (
      <ImageBackground source={LoginBackground} style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" translucent />
        <View style={styles.backgroundOverlay} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          style={styles.container}
        >
          <Image source={Logo} style={styles.logo} resizeMode={'center'} />

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInputMask
                style={styles.inputText}
                placeholder="CPF/CNPJ"
                placeholderTextColor="#555"
                keyboardType="number-pad"
                autoCorrect={false}
                type="custom"
                value={document}
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                options={{
                  mask:
                    document_type === 'cpf'
                      ? '999.999.999-99*'
                      : '99.999.999/9999-99',
                  validator: value => {
                    return validateCnpj(value) || validateCPF(value)
                  }
                }}
                onChangeText={text =>
                  this.setState({
                    document: text,
                    document_type: text.length > 14 ? 'cnpj' : 'cpf'
                  })
                }
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                color="#555"
                size={25}
                style={styles.icons}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Senha"
                placeholderTextColor="#555"
                secureTextEntry={true}
                autoCorrect={false}
                value={password}
                returnKeyType="go"
                onSubmitEditing={() => this.handleSubmit()}
                ref={input => {
                  this.passwordInput = input
                }}
                onChangeText={text =>
                  this.setState({
                    password: text
                  })
                }
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
                color="#555"
                size={25}
                style={styles.icons}
              />
            </View>

            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSubmit()}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.version}>v0.1.0</Text>

            {/* External links */}
            <View style={styles.externalLinksContainer}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://beedelivery.com.br/faq')
                }
              >
                <Text style={styles.externalLinksText}>Dúvidas?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.externalLinksText}>Cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

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
  }
})
