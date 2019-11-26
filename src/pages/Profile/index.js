import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as UserAction } from '../../store/ducks/user'

import MainContainer from '../../components/MainContainer'

import styles from './styles'
import { colors } from '../../styles'

class Profile extends Component {
  state = {
    points: 0,
    stars: 0,
    followers: 0
  }

  async handleLogout() {
    const { navigation } = this.props
    await AsyncStorage.clear()
    navigation.navigate('Login')
  }

  componentDidMount() {
    const { addUserRequest } = this.props
    addUserRequest('mateus4k')
    this.setState({ points: 181.43 })
    this.setState({ stars: 4.13 })
    this.setState({ followers: 7 })
  }

  render() {
    const { points, stars, followers } = this.state
    const {
      user: { data: user, loading }
    } = this.props

    return (
      <MainContainer name="Perfil">
        <View style={styles.userContainer}>
          <ShimmerPlaceHolder
            style={styles.userImage}
            visible={!loading}
            backgroundColorBehindBorder={colors.lighter}
          >
            {user.map(user => (
              <Image
                key={user.id}
                style={styles.userImage}
                source={!loading ? { uri: user.avatar } : null}
              />
            ))}
          </ShimmerPlaceHolder>

          <View style={styles.userInfoContainer}>
            <ShimmerPlaceHolder
              autoRun
              style={styles.userInfoName}
              visible={!loading}
              backgroundColorBehindBorder={colors.lighter}
            >
              {user.map(user => (
                <Text key={user.id} style={styles.userInfoName}>
                  {user.name}
                </Text>
              ))}
            </ShimmerPlaceHolder>
            <View style={styles.userInfoList}>
              <View style={styles.userInfoStats}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
                  color={colors.darker}
                  size={20}
                  style={styles.userInfoIcon}
                />
                <ShimmerPlaceHolder
                  style={{ width: 30 }}
                  visible={!loading}
                  backgroundColorBehindBorder={colors.lighter}
                >
                  <Text style={styles.userInfoText}>{stars}</Text>
                </ShimmerPlaceHolder>
              </View>
              <View style={styles.userInfoStats}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                  color={colors.darker}
                  size={20}
                  style={styles.userInfoIcon}
                />
                <ShimmerPlaceHolder
                  style={{ width: 30 }}
                  visible={!loading}
                  backgroundColorBehindBorder={colors.lighter}
                >
                  <Text style={styles.userInfoText}>{followers}</Text>
                </ShimmerPlaceHolder>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuList}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Ajustes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuList}>
            <Icon
              name={
                Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline'
              }
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Bee Points</Text>
            <Text style={styles.menuTextPoints}>{points}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuList}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'}
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Indicar Pessoas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuList}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'}
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Minhas Faturas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuList}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-bicycle' : 'md-bicycle'}
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Auto Teste</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuList}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Alterar Senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuList}
            onPress={() => this.handleLogout()}
          >
            <Icon
              name={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'}
              color={colors.darker}
              size={25}
              style={styles.icons}
            />
            <Text style={styles.menuText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </MainContainer>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators(UserAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
