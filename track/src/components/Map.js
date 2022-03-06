import React from 'react'
import { View } from 'react-native'
// import { Button, Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {

  return (
    <>
      {/* <Text h4>Map</Text> */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 34.744755,
          longitude: 72.355782,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>


    </>
  )
}

export default Map