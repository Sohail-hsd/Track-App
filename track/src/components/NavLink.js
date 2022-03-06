import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NavLink = ({ optionText1, optionText2, Route1,Route2}) => {
    const navigation = useNavigation()
    
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate(Route1)}>
                    <Text style={styles.option} >{optionText1}</Text>
                </TouchableOpacity>
                { optionText2 || Route2 ?
                <TouchableOpacity onPress={() => navigation.navigate(Route2)}>
                    <Text style={styles.option} >{optionText2}</Text>
                </TouchableOpacity>
                : null}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    option: {
        color: '#0483de',
        marginVertical: 5,
    },
})

export default NavLink