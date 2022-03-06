import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Input, Button } from 'react-native-elements'

const ForgetPassword = ({navigation}) => {
    const [forgetEmail, setforgetEmail] = useState('');

    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            // setforgetEmail({ email: text })
            return false;
        }
        else {
            // setforgetEmail({ email: text })
            console.log("Email is Correct");
        }
    }
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='go-kart-track' size={60} style={styles.icon} />
            <Text style={styles.title}>ForgetPassword</Text>
            <View style={styles.auth}>
                <Input
                    keyboardType='email-address'
                    style={styles.input}
                    value={forgetEmail}
                    placeholder="Forget email address"
                    onChangeText={(email) => setforgetEmail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    blurOnSubmit={true}
                    rightIcon={<MaterialCommunityIcons
                        name='email-send'
                        size={20}
                        color='black'
                    />}
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title="Send mail"
                    loading={false}
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        height: 50,
                    }}
                    onPress={() => {
                        // validate(email)
                    }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={{ color: '#0483de',marginVertical: 20,}}  >Goto To Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 100
    },
    auth: {
        padding: 10,
    },
    input: {
        fontSize: 18,
        // marginTop: 10,
        // borderWidth: 1,
        // padding: 10,
        // borderRadius: 5,
    },
    btn: {
        marginHorizontal: 10,
    },
    option: {
        color: '#0483de',
        marginVertical: 5,
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

export default ForgetPassword