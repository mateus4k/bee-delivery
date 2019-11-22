import React, { Component } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  ScrollView
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { validateCnpj } from 'react-native-masked-text/dist/lib/masks/cnpj.mask'
import { validateCPF } from 'react-native-masked-text/dist/lib/masks/cpf.mask'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import Logo from '../../assets/logo.png'

import styles from './styles'
import { colors } from '../../styles'

export default class Register extends Component {
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
      <ScrollView>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.header}>
            <Image source={Logo} style={styles.logo} resizeMode='center' />
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Pronto para ganhar
                <Text style={styles.textBold}> dinheiro</Text>?
              </Text>
              <Text style={styles.subtitle}>É só se cadastrar.</Text>
            </View>

            {/* State */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Estado'
                placeholderTextColor={colors.dark}
                autoCorrect
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
                color={colors.dark}
                size={25}
                style={styles.icons}
              />
            </View>

            {/* City */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Cidade'
                placeholderTextColor={colors.dark}
                autoCorrect
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-locate' : 'md-locate'}
                color={colors.dark}
                size={25}
                style={styles.icons}
              />
            </View>

            {/* CPF/CNPJ */}
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

            {/* Name */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Nome Completo'
                placeholderTextColor={colors.dark}
                autoCorrect
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
                color={colors.dark}
                size={25}
                style={styles.icons}
              />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='E-mail'
                placeholderTextColor={colors.dark}
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCorrect={false}
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
                color={colors.dark}
                size={25}
                style={styles.icons}
              />
            </View>

            {/* Password */}
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

            {/* Password confirmation */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Confirme sua senha'
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
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={styles.termsOfUseContainer}>
              <Text style={styles.termsOfUseText}>
                Ao continuar, eu confirmo que li a Política de Privacidade da
                Bee e concordo com os
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://beedelivery.com.br/termos-uso-entregador'
                )}
              >
                <Text style={styles.termsOfUseButtonText}>Termos de Uso</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
