import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../Hooks/useSaveTrack'
import * as RootNavigation from '../RootNavigation';


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
        if(!TrackName)
        {
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
            <Input
                style={styles.input}
                errorMessage={Err}
                value={TrackName}
                placeholder="Enter Track Name"
                onChangeText={text => setTrackName(text)}
            />
            {recording ? (
                <Button buttonStyle={styles.btn2} title='Stop Recording' onPress={stopRecording} />
            ) : (
                <Button buttonStyle={styles.btn} title='Start Recording' onPress={startRecording} />
            )}
            {
                !recording && locations.length ?
                <Button  buttonStyle={styles.btn2} title='Save Track' onPress={submittForm} />
                : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop:10,
    },
    btn: {
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(39, 39, 39, 1)',
        height: 80,
        marginBottom:5,

    },
    btn2:{
        marginHorizontal: 10,
        marginBottom:10,
        borderRadius: 10,
        backgroundColor: 'rgba(39, 39, 39, 1)',
        height: 40,
    }
})

export default TrackForm

