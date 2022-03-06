import './_mockLocation'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as locationContext } from '../context/LocationContext'
import useLocation from '../Hooks/useLocation'

const TrackCreateScreen = () => {
    const {addLocation} = useContext(locationContext)
    const [error] = useLocation(addLocation)
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TrackCreateScreen</Text>
            <View style={styles.track}>
                <Map />
            </View>
            {error ? <Text>Please enable location services.{error}</Text> : null}
            <Button
                buttonStyle={styles.btn}
                title='Record Track'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
    },
    btn: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(39, 39, 39, 1)',
        height: 80,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    track: {
        // borderWidth: 1,
        flex: 1,

    }
})

export default TrackCreateScreen