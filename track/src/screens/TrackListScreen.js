import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTrack } = useContext(TrackContext)


    useEffect(async () => {
        const tracks = await navigation.addListener('focus', fetchTrack)
        console.log(state.length)
        if(!tracks){
            return <View>
                <Text>There is not Track Create Some...</Text>
            </View>
        }
    }, [])

    
    return (
        <View>
            {state.length === 0 ? <ActivityIndicator style={{ marginTop: 280 }} size="large" color="#0000ff" /> :
                <FlatList
                    style={{ marginTop: 5 }}
                    data={state}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item._id, name: item.name })}>
                            {/* <Text>{item.name}</Text> */}
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>

                    }}
                />}
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen