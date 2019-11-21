import React, { Component } from 'react'
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
  AsyncStorage,
  ActivityIndicator
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { validateCnpj } from 'react-native-masked-text/dist/lib/masks/cnpj.mask'
import { validateCPF } from 'react-native-masked-text/dist/lib/masks/cpf.mask'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import LoginBackground from '../../assets/login.png'
import Logo from '../../assets/logo.png'

import styles from './styles'

export default class Login extends Component {
  state = {
    document: '',
    documentType: '',
    password: '',
    loading: false,
    error: null
  }

  static navigationOptions = {
    header: null
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    const { navigation } = this.props
    AsyncStorage.getItem('@BeeDelivery:user').then(user => {
      if (user) navigation.navigate('Home')
    })
  }

  checkDocument = async (document, password) => {
    if ((document.length === 14 || document.length === 18) && password) {
      return document
    }
  }

  saveUser = async document => {
    await AsyncStorage.setItem('@BeeDelivery:user', document)
  }

  signIn = async () => {
    this.setState({ loading: true, error: null })

    const { document, password } = this.state
    const { navigation } = this.props

    try {
      const check = await this.checkDocument(document, password)
      if (!check) throw 'Credenciais inválidas'

      await this.saveUser(document)
      navigation.navigate('Home')
    } catch (err) {
      this.setState({ loading: false, error: err })
    }
  }

  render () {
    const { navigation } = this.props
    const { document, documentType, password, loading, error } = this.state

    return (
      <ImageBackground source={LoginBackground} style={styles.backgroundImage}>
        <StatusBar barStyle='dark-content' translucent />
        <View style={styles.backgroundOverlay} />

        <KeyboardAvoidingView
          behavior={Platform.select({
            ios: 'padding',
            android: null
          })}
          style={styles.container}
        >
          <Image source={Logo} style={styles.logo} resizeMode='center' />

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInputMask
                style={styles.inputText}
                placeholder='CPF/CNPJ'
                placeholderTextColor='#555'
                keyboardType='number-pad'
                autoCorrect={false}
                type='custom'
                value={document}
                returnKeyType='next'
                onSubmitEditing={() => this.passwordInput.focus()}
                options={{
                  mask:
                    documentType === 'cpf'
                      ? '999.999.999-99*'
                      : '99.999.999/9999-99',
                  validator: value => {
                    return validateCnpj(value) || validateCPF(value)
                  }
                }}
                onChangeText={text =>
                  this.setState({
                    document: text,
                    documentType: text.length > 14 ? 'cnpj' : 'cpf'
                  })}
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                color='#555'
                size={25}
                style={styles.icons}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Senha'
                placeholderTextColor='#555'
                secureTextEntry
                autoCorrect={false}
                value={password}
                returnKeyType='go'
                onSubmitEditing={() => this.signIn()}
                ref={input => {
                  this.passwordInput = input
                }}
                onChangeText={text =>
                  this.setState({
                    password: text
                  })}
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
                color='#555'
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
              onPress={() => this.signIn()}
            >
              {loading ? (
                <ActivityIndicator size='small' color='#FFF' />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.version}>v0.1.0</Text>

            {/* External links */}
            <View style={styles.externalLinksContainer}>
              <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() =>
                  Linking.openURL('https://beedelivery.com.br/faq')}
              >
                <Text style={styles.externalLinksText}>Dúvidas?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={styles.externalLinksText}>Cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        {!!error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </ImageBackground>
    )
  }
}
