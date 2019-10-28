import React, { useState } from 'react'

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home({ navigation }) {
  const [points, setPoints] = useState(181.43)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <TouchableOpacity style={styles.menuList}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Ajustes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Bee Points</Text>
        <Text>{points}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Indicar Pessoas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Minhas Faturas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Auto Teste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Alterar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuList}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          color="#555"
          size={25}
          style={styles.icons}
        />
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30
  },

  menuList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)'
  },

  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }
})
