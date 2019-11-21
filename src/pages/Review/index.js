import React, { Component } from 'react'

import MainContainer from '../../components/MainContainer'
import CardReview from '../../components/CardReview'

import styles from './styles'

export default class Review extends Component {
  state = {
    reviews: [
      {
        id: 1,
        image: 'https://avatars0.githubusercontent.com/u/30202634?s=460&v=4',
        title: 'Comida muito boa!',
        user: 'Mateus Sampaio',
        description: 'Excelente porém muito ruim',
        stars: 5
      },
      {
        id: 2,
        image: 'https://avatars3.githubusercontent.com/u/43649739?s=460&v=4',
        title: 'Comida muito boa!',
        user: 'Bruno Estevam',
        description: 'Excelente porém muito ruim',
        stars: 4
      },
      {
        id: 3,
        image: 'https://avatars3.githubusercontent.com/u/46168088?s:460&v:4',
        title: 'Comida muito boa!',
        user: 'Mateus Cavalcante',
        description: 'Excelente porém muito ruim',
        stars: 4.5
      },
      {
        id: 4,
        image: 'https://avatars2.githubusercontent.com/u/43121724?s:460&v:4',
        title: 'Comida muito boa!',
        user: 'Maykon Morais',
        description: 'Excelente porém muito ruim',
        stars: 5
      },
      {
        id: 5,
        image: 'https://avatars1.githubusercontent.com/u/44036917?s:460&v:4',
        title: 'Comida muito boa!',
        user: 'Thomas Maikon',
        description: 'Excelente porém muito ruim',
        stars: 4.5
      },
      {
        id: 6,
        image: 'https://avatars2.githubusercontent.com/u/20401971?s:460&v:4',
        title: 'Comida muito boa!',
        user: 'Dylan Oliveira',
        description: 'Excelente porém muito ruim',
        stars: 4
      }
    ]
  }

  render () {
    const { reviews } = this.state
    return (
      <MainContainer name='Avaliações'>
        {reviews &&
          reviews.map(review => (
            <CardReview
              key={review.id}
              image={review.image}
              title={review.title}
              user={review.user}
              description={review.description}
              stars={review.stars}
            />
          ))}
      </MainContainer>
    )
  }
}
