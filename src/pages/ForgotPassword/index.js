import React, { Component } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { validateCnpj } from 'react-native-masked-text/dist/lib/masks/cnpj.mask'
import { validateCPF } from 'react-native-masked-text/dist/lib/masks/cpf.mask'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../../assets/logo.png'

import styles from './styles'
import { colors } from '../../styles'

export default class ForgotPassword extends Component {
  state = {
    document: '',
    documentType: ''
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: colors.black
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  render () {
    const { document, documentType } = this.state
    const { navigation } = this.props
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} resizeMode='center' />
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.title}>Recuperação de Senha</Text>
          <View style={styles.inputContainer}>
            <TextInputMask
              style={styles.inputText}
              placeholder='CPF/CNPJ'
              placeholderTextColor={colors.dark}
              keyboardType='number-pad'
              autoCorrect={false}
              type='custom'
              value={document}
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
              color={colors.dark}
              size={25}
              style={styles.icons}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder='Senha'
              placeholderTextColor={colors.dark}
              secureTextEntry
              autoCorrect={false}
            />
            <Icon
              name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
              color={colors.dark}
              size={25}
              style={styles.icons}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Redefinir</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Ainda não possui conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerButtonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
