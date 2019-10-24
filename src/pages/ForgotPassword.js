import React, { Component } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Linking,
  StyleSheet
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { validateCnpj } from 'react-native-masked-text/dist/lib/masks/cnpj.mask'
import { validateCPF } from 'react-native-masked-text/dist/lib/masks/cpf.mask'
import Icon from 'react-native-vector-icons/Ionicons'

import Logo from '../assets/logo.png'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subscription: '',
      subscription_type: ''
    }
  }

  render() {
    const { subscription, subscription_type } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} resizeMode={'center'} />
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.title}>Recuperação de Senha</Text>
          <View style={styles.inputContainer}>
            <TextInputMask
              style={styles.inputText}
              placeholder="CPF/CNPJ"
              placeholderTextColor="#777"
              keyboardType="number-pad"
              autoCorrect={false}
              type="custom"
              value={subscription}
              options={{
                mask:
                  subscription_type === 'cpf'
                    ? '999.999.999-99*'
                    : '99.999.999/9999-99',
                validator: value => {
                  return validateCnpj(value) || validateCPF(value)
                }
              }}
              onChangeText={text =>
                this.setState({
                  subscription: text,
                  subscription_type: text.length > 14 ? 'cnpj' : 'cpf'
                })
              }
            />
            <Icon
              name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
              color="#777"
              size={25}
              style={styles.icons}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Senha"
              placeholderTextColor="#777"
              secureTextEntry={true}
              autoCorrect={false}
            />
            <Icon
              name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
              color="#777"
              size={25}
              style={styles.icons}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Redefinir</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Ainda não possui conta?</Text>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                Linking.openURL('https://beedelivery.com.br/entregadores')
              }
            >
              <Text style={styles.registerButtonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fd0',
    height: 260,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 30,
    marginBottom: 50,
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

  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
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

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },

  registerText: {
    color: '#777',
    marginRight: 2,
    fontSize: 14
  },

  registerButtonText: {
    color: '#fd0',
    fontWeight: '600',
    fontSize: 14
  }
})
