import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    marginHorizontal: 30,
    height: 140,
    borderRadius: 10,
    backgroundColor: colors.semiwhite,
    borderWidth: 1,
    borderColor: colors.whiteTransparent,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  cardImageContainer: {
    zIndex: 1,
    marginLeft: 15,
    marginBottom: 36
  },

  cardImage: {
    width: 100,
    height: 150,
    borderRadius: 10
  },

  cardInfoContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 15
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.darker,
    marginBottom: 2
  },

  cardUser: {
    fontSize: 14,
    color: colors.darker,
    marginBottom: 2
  },

  cardDescription: {
    fontSize: 14,
    color: colors.dark,
    marginBottom: 2
  },

  cardStarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  cardStarsIcon: {
    marginHorizontal: 1
  },

  cardStarsText: {
    marginHorizontal: 1,
    color: colors.dark
  }
})

export default styles
