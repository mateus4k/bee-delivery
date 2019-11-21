import { StyleSheet } from 'react-native'

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

export default styles
