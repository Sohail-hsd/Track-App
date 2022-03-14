import './_mockLocation'
import React, { useContext, useCallback, useEffect } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Text } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map'
import { Context as locationContext } from '../context/LocationContext'
import useLocation from '../Hooks/useLocation'
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
    const { state: { recording }, addLocation, reset } = useContext(locationContext);
    const isFocused = useIsFocused()
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording]
    );
    // useEffect(() => {
    //     reset()
    // }, [input]);
    const [err] = useLocation(isFocused || recording, callback);
           
    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="rgba(59, 57, 173, 0.28)"
                barStyle='dark-content'
                hidden={false}
                />

            <View style={styles.container}>
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
        margin: 1,
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