import React, { useContext } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as locationContext } from '../context/LocationContext'

const Map = () => {
  const { state: { currentLocation } } = useContext(locationContext);
  console.log(currentLocation)
  if (!currentLocation) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  return (
    <>
      {/* <Text h4>Map</Text> */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          // latitude: 34.744755,
          // longitude: 72.355782,
          ...currentLocation.coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Circle
          center={currentLocation.coords}
          strokeWidth={10}
          radius={30}
          strokeColor='rgba(158,158,255,1.0)' //Border Color
          fillColor='rgba(158,158,255,0.3)' // circle fill Color
        />
      </MapView>


    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});


export default Map