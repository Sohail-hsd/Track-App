import React, { useContext, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'
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
    const [modalVisible, setModalVisible] = useState(false);

    const [saveTrack] = useSaveTrack()
    const [Err, setErr] = useState(null);

    const openModal = () => {
        setModalVisible(true)
    }
    
    const submittForm = () => {
        if (!name) {
            setErr('Please, Enter Track name.')
            return
        }
        setModalVisible(!modalVisible)
        setErr(null)
        setTrackName('')
        saveTrack()
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
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Create Your Track</Text>
                            <Input
                                label='Track Name'
                                style={styles.input}
                                errorMessage={Err}
                                value={name}
                                onChangeText={changeName}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={submittForm}
                            >
                                <Text style={styles.textStyle}>Save Track</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

            {
                recording ? (
                    <View style={styles.iconView}>
                        <TouchableOpacity style={styles.btn} onPress={stopRecording}>
                            <Ionicons color='rgba(244, 55, 45, 0.79)' name='md-stop' size={30} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={[styles.iconView, styles.iconViewStop]}>
                        <TouchableOpacity style={styles.btn} onPress={startRecording}>
                            <MaterialCommunityIcons color='rgba(83, 11, 98, 1)' name='go-kart-track' size={30} />
                        </TouchableOpacity>
                    </View>

                )
            }
            {
                !recording && locations.length ?
                    <View style={styles.iconView}>
                        <TouchableOpacity style={styles.btn} onPress={openModal}>
                            <MaterialCommunityIcons color='rgba(83, 11, 98, 1)' name='progress-upload' size={30} />
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        // flex:1
    },
    btn: {
        borderRadius: 100,
        backgroundColor: 'white',
        height: 60,
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10,
        backgroundColor: 'rgba(44, 81, 245, 0.23)'
    },
    iconView: {
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 580,
        alignSelf: "flex-end",
    },
    iconViewStop: {
        marginTop: 480,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    }
})

export default TrackForm

