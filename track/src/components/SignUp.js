import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Button, Input } from 'react-native-elements'

const SignUp = ({title,ErrorMessage,onSubmitt}) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [username, setusername] = useState('');
    // const [loading, setloading] = useState(false);
    const [ConformPassword, setConformPassword] = useState('');
    const [eye, seteye] = useState('eye-off');

    const Input1 = useRef()
    const Input2 = useRef()
    const Input3 = useRef()

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            // setemail({ email: text })
            if (text != '') {
                setError('Email is not valid.')
            }
            return false;
        }
        else {
            // setemail({ email: text })
            return true
        }
    }

    return (
        <>
            <View style={styles.auth}>
                <View>
                    <Input
                        containerStyle={styles.input}
                        value={username}
                        placeholder="First Name"
                        onChangeText={(uname) => setusername(uname)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => Input1.current.focus()}
                        blurOnSubmit={true}
                        rightIcon={<FontAwesome5
                            name='user-alt'
                            size={20}
                            color='black'
                        />}
                    />
                </View>
                <Input
                    keyboardType={'email-address'}
                    containerStyle={styles.input}
                    value={email}
                    placeholder="Email"
                    onChangeText={(email) => setemail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => Input2.current.focus()}
                    blurOnSubmit={true}
                    ref={Input1}
                    rightIcon={<MaterialCommunityIcons name='email' size={20} />}
                />

                <Input
                    containerStyle={styles.input}
                    value={password}
                    placeholder="password"
                    onChangeText={(password) => setpassword(password)}
                    onSubmitEditing={() => Input3.current.focus()}
                    autoComplete='none'
                    autoCorrect={false}
                    autoCapitalize='none'
                    ref={Input2}
                    secureTextEntry={eye === 'eye' ? false : true}
                    rightIcon={
                        <TouchableOpacity onPress={() => eye === 'eye' ? (seteye('eye-off')) : seteye('eye')}>
                            <MaterialCommunityIcons name={eye} size={24} color='black' />
                        </TouchableOpacity>
                    }
                />

                <Input
                    containerStyle={styles.input}
                    value={ConformPassword}
                    placeholder="Conform password"
                    onChangeText={(Cpassword) => setConformPassword(Cpassword)}
                    autoComplete='none'
                    autoCorrect={false}
                    autoCapitalize='none'
                    ref={Input3}
                    secureTextEntry={eye === 'eye' ? false : true}
                    rightIcon={
                        <TouchableOpacity onPress={() => eye === 'eye' ? (seteye('eye-off')) : seteye('eye')}>
                            <MaterialCommunityIcons name={eye} size={24} color='black' />
                        </TouchableOpacity>
                    }
                />
                {ErrorMessage ? <Text style={{ margin: 5, color: 'red' }}>{ErrorMessage}</Text> : null}
                <View style={styles.btn}>
                    <Button
                        title={title}
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
                            if (validate(email)) {
                                onSubmitt({ email, password })
                            }
                        }}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginTop: 100,
    },
    auth: {
        padding: 5,
    },
    input: {
        fontSize: 18,
        marginTop: 0,
        borderWidth: 0,
        borderRadius: 5,
    },
    btn: {
        marginVertical: 5
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

export default SignUp