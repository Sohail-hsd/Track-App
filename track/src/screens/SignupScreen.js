import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { Context as authContext } from '../context/authContext'
import NavLink from '../components/NavLink'
import SignUp from '../components/SignUp'


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(authContext)

    useEffect(() => navigation.addListener('beforeRemove', clearErrorMessage), []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <MaterialCommunityIcons name='go-kart-track' size={60} style={styles.icon} />
                    <Text style={styles.title}>
                        Sign Up
                    </Text>
                    <View>
                        <SignUp
                            title="Sign Up"
                            onSubmitt={signup}
                            ErrorMessage={state.ErrorMessage}
                        />
                        <NavLink
                            optionText1="Already have an account?"
                            optionText2="Sign in instead."
                            Route1='Signin'
                            Route2='Signin'
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginTop: 100,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    icon: {
        alignSelf: 'center',
        color: '#009688',
        marginBottom: 10,
    }

})

export default SignupScreen