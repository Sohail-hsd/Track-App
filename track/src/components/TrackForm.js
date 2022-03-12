import React, { useContext, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../Hooks/useSaveTrack'
import * as RootNavigation from '../RootNavigation';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'


const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
        reset,
    } = useContext(LocationContext)
    const [TrackName, setTrackName] = useState()

    const [saveTrack] = useSaveTrack()
    const [Err, setErr] = useState(null);

    const submittForm = () => {
        if (!TrackName) {
            setErr('Enter Track Name First.')
            return
        }
        setErr(null)
        changeName(TrackName)
        saveTrack()
        // reset()
        // RootNavigation.navigate('List')
        setTrackName('')
    }
    return (
        <>
            {/* <Input
                style={styles.input}
                errorMessage={Err}
                value={TrackName}
                placeholder="Enter Track Name"
                onChangeText={text => setTrackName(text)}
            /> */}
            {recording ? (
                <View style={styles.iconView}>
                    <TouchableOpacity style={styles.btn} onPress={stopRecording}>
                        <Ionicons name='md-stop' size={30} />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.iconView}>
                    <TouchableOpacity style={styles.btn} onPress={startRecording}>
                        <MaterialCommunityIcons name='go-kart-track' size={30} />
                    </TouchableOpacity>
                </View>

            )}
            {
                !recording && locations.length ?
                    <View style={styles.iconView}>
                        <TouchableOpacity style={styles.btn} onPress={startRecording}>
                            <MaterialCommunityIcons name='progress-upload' size={30} />
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
    },
    btn: {
        borderRadius: 100,
        // backgroundColor: 'rgba(39, 39, 39, 1)',
        backgroundColor: 'white',
        height: 60,
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10
    },
    btn2: {
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(39, 39, 39, 1)',
        height: 40,
    },
    iconView: {
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 580,
        alignSelf: "flex-end"
    }
})

export default TrackForm

