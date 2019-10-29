import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Profile({ navigation }) {
  const [points, setPoints] = useState(181.43)
  const [stars, setStars] = useState(4.13)
  const [followers, setFollowers] = useState(7)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'#202020'} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Perfil</Text>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.userContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri:
                  'https://avatars0.githubusercontent.com/u/30202634?s=460&v=4'
              }}
            />
            <View style={styles.userInfoContainer}>
              <Text style={styles.userInfoName}>Mateus Sampaio</Text>
              <View style={styles.userInfoList}>
                <View style={styles.userInfoStats}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
                    color="#555"
                    size={20}
                    style={styles.userInfoIcon}
                  />
                  <Text style={styles.userInfoText}>{stars}</Text>
                </View>
                <View style={styles.userInfoStats}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                    color="#555"
                    size={20}
                    style={styles.userInfoIcon}
                  />
                  <Text style={styles.userInfoText}>{followers}</Text>
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
                name={
                  Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'
                }
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
              onPress={() => navigation.navigate('Login')}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#202020' },

  mainContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -10,
    backgroundColor: '#fff'
  },

  headerContainer: {
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20
  },

  headerText: {
    fontWeight: '600',
    fontSize: 22,
    color: '#fff'
  },

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
