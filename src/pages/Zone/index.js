import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'

import MainContainer from '../../components/MainContainer'

import styles from './styles'

export default class Zones extends Component {
  state = {
    organization: {
      title: 'Bee Delivery',
      locale: {
        latitude: -5.2087074,
        longitude: -37.337614,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    }
  }

  render () {
    const { organization } = this.state
    return (
      <MainContainer name='Zonas'>
        <MapView
          initialRegion={organization.locale}
          style={styles.mapStyle}
          cacheEnabled
          loadingEnabled
        >
          <Marker coordinate={organization.locale} title={organization.title} />
        </MapView>
      </MainContainer>
    )
  }
}
