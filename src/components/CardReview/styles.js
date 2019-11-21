import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    marginHorizontal: 30,
    height: 140,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
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
    color: '#333',
    marginBottom: 2
  },

  cardUser: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2
  },

  cardDescription: {
    fontSize: 14,
    color: '#888',
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
    marginHorizontal: 1
  }
})

export default styles
