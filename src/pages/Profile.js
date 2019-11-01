import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import MainContainer from '../components/MainContainer'

export default function Profile({ navigation }) {
  const [points, setPoints] = useState(0)
  const [stars, setStars] = useState(0)
  const [followers, setFollowers] = useState(0)
  const [userImage, setUserImage] = useState('')
  const [username, setUsername] = useState('')
  const [isFetched, setIsFetched] = useState(false)

  handleLogout = async () => {
    await AsyncStorage.removeItem('@BeeDelivery:user')
    navigation.navigate('Login')
  }

  useEffect(() => {
    setTimeout(() => {
      setPoints(181.43)
      setStars(4.13)
      setFollowers(7)
      setUserImage(
        'https://avatars0.githubusercontent.com/u/30202634?s=460&v=4'
      )
      setUsername('Mateus Sampaio')
      setIsFetched(true)
    }, 1500)
  }, [])

  return (
    <MainContainer name="Perfil">
      <View style={styles.userContainer}>
        <ShimmerPlaceHolder
          style={styles.userImage}
          visible={isFetched}
          backgroundColorBehindBorder={'#ddd'}
        >
          <Image
            style={styles.userImage}
            source={isFetched ? { uri: userImage } : null}
          />
        </ShimmerPlaceHolder>

        <View style={styles.userInfoContainer}>
          <ShimmerPlaceHolder
            autoRun={true}
            style={styles.userInfoName}
            visible={isFetched}
            backgroundColorBehindBorder={'#ddd'}
          >
            <Text style={styles.userInfoName}>{username}</Text>
          </ShimmerPlaceHolder>
          <View style={styles.userInfoList}>
            <View style={styles.userInfoStats}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
                color="#555"
                size={20}
                style={styles.userInfoIcon}
              />
              <ShimmerPlaceHolder
                style={{ width: 30 }}
                visible={isFetched}
                backgroundColorBehindBorder={'#ddd'}
              >
                <Text style={styles.userInfoText}>{stars}</Text>
              </ShimmerPlaceHolder>
            </View>
            <View style={styles.userInfoStats}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                color="#555"
                size={20}
                style={styles.userInfoIcon}
              />
              <ShimmerPlaceHolder
                style={{ width: 30 }}
                visible={isFetched}
                backgroundColorBehindBorder={'#ddd'}
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
            color="#555"
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
            color="#555"
            size={25}
            style={styles.icons}
          />
          <Text style={styles.menuText}>Bee Points</Text>
          <Text style={styles.menuTextPoints}>{points}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuList}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'}
            color="#555"
            size={25}
            style={styles.icons}
          />
          <Text style={styles.menuText}>Indicar Pessoas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuList}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'}
            color="#555"
            size={25}
            style={styles.icons}
          />
          <Text style={styles.menuText}>Minhas Faturas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuList}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-bicycle' : 'md-bicycle'}
            color="#555"
            size={25}
            style={styles.icons}
          />
          <Text style={styles.menuText}>Auto Teste</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuList}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
            color="#555"
            size={25}
            style={styles.icons}
          />
          <Text style={styles.menuText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuList}
          onPress={() => handleLogout()}
        >
          <Icon
            name={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'}
            color="#555"
            size={25}
            style={styles.icons}
          />
          <Text style={styles.menuText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

  userImage: {
    width: 140,
    height: 140,
    borderRadius: 70
  },

  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },

  userInfoName: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 20,
    fontStyle: 'italic',
    color: '#444',
    marginVertical: 3
  },

  userInfoList: {
    flexDirection: 'row'
  },

  userInfoStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },

  userInfoText: {
    fontWeight: '600'
  },

  userInfoIcon: {
    marginHorizontal: 5
  },

  menuContainer: {
    marginHorizontal: 30
  },

  menuList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)'
  },

  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 15,
    maxWidth: 30
  },

  menuText: {
    fontSize: 18,
    color: '#444'
  },

  menuTextPoints: {
    fontSize: 15,
    marginLeft: 4,
    color: '#888',
    justifyContent: 'center'
  }
})
