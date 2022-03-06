import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Signin from '../components/Signin'
import NavLink from '../components/NavLink'
import { Context as authContext } from '../context/authContext'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage, tryLocalSignin } = useContext(authContext)

    useEffect(() => navigation.addListener('blur', clearErrorMessage), []);


    return (
        <ScrollView>
            <>
                <View style={styles.container}>
                    <MaterialCommunityIcons name='go-kart-track' size={60} style={styles.icon} />
                    <Text style={styles.title}>
                        Sign In
                    </Text>
                    <Signin
                        Title="Sign in"
                        ErrorMessage={state.ErrorMessage}
                        onSubmitt={signin}
                    />

                    <NavLink
                        optionText1="Don`t have an account? goto Sign up."
                        optionText2="Forget Password."
                        Route1='Signup'
                        Route2='Forget Password'
                    />
                </View>
            </>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 100,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    icon: {
        alignSelf: 'center',
        color: '#009688',
        marginBottom: 10,
    }

})

export default SigninScreen