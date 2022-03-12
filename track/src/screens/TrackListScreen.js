import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'


const TrackListScreen = ({ navigation }) => {
    const { state, fetchTrack } = useContext(TrackContext)

    useEffect(() => navigation.addListener('focus', fetchTrack), [])
    console.log(state.length)
    return (
        <View>
            <Text>TrackListScreen</Text>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity>
                        {/* <Text>{item.name}</Text> */}
                        <ListItem>
                            <ListItem.Content onPress={navigation.navigate('Details')}>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen