import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export default (callback) => {
    const [error, setError] = useState(null)
    const getLocationsPermission = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, callback)

            if (!status === 'granted') {
                setError("Permission to access location is denied");
                return
            }

            // let location = await Location.getCurrentPositionAsync({});
            // setLocation(location);
            // console.log(location)

        } catch (error) {
            setError(error.message)
        }
    }
    useEffect(() => {
        getLocationsPermission()
    }, []);

    return [error]
}