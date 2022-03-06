import './_mockLocation'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Map from '../components/Map'
import * as Location from 'expo-location'


const TrackCreateScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocationsPermission = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10,
            },(location) => console.log(location))

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        getLocationsPermission();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TrackCreateScreen</Text>
            <View style={styles.track}>
                <Map />
            </View>
            {!location ? <Text>Please enable location services. {text}</Text> : null}
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
        borderWidth: 1,
        flex: 1,

    }
})

export default TrackCreateScreen