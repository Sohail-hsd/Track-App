import './_mockLocation'
import React, { useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map'
import { Context as locationContext } from '../context/LocationContext'
import useLocation from '../Hooks/useLocation'
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
    const { state : {recording}, addLocation } = useContext(locationContext);
    const isFocused = useIsFocused()
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>TrackCreateScreen</Text>
                <View style={styles.track}>
                    <Map />
                </View>
                {err ? <Text>Please enable location services.{err}</Text> : null}
                <TrackForm />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
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