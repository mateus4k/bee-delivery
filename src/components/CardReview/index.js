import React from 'react'
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import styles from './styles'
import { colors } from '../../styles'

const CardReview = ({ image, title, user, description, stars }) => (
  <TouchableOpacity>
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardUser}>{user}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <View style={styles.cardStarsContainer}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
            color={colors.dark}
            size={20}
            style={styles.cardStarsIcon}
          />
          <Text style={styles.cardStarsText}>{stars}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

CardReview.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default CardReview
