import React, { useContext } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import MapView, { Polyline } from 'react-native-maps'
import { Context as TrackContext } from '../context/TrackContext'


const TrackDetailScreen = ({ route, navigation }) => {
    const { state } = useContext(TrackContext)
    const { id } = route.params
    const track = state.find((t) => t._id === id)
    // console.log(track)
    // Getting initialRegin from track.(Starting Point of Track)
    const initialRegin = track.locations[0].coords
    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    ...initialRegin,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}
                    strokeColor="rgba(18, 16, 134, 0.3)"
                    strokeWidth={4}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
})

export default TrackDetailScreen