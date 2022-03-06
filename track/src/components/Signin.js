import React, { useState, useRef } from 'react'
import { Text,StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Input, Button } from 'react-native-elements'

const Signin = ({ navigation, Title, onSubmitt, ErrorMessage }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Error, setemailError] = useState(null);
    const [passError, setpassError] = useState(null);
    const [eye, seteye] = useState('eye-off');
    const Input1 = useRef()

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setemailError(true)
            return false;
        }
        else {
            setemailError(false)
            return true
        }
    }
    if (Error || passError) {
        setTimeout(() => {
            setemailError(null)
            setpassError(null)
        }, 5000);
    }

    return (
        <>
            <View style={styles.auth}>
                <Input
                    style={styles.input}
                    value={email}
                    placeholder="Email"
                    onChangeText={(email) => setemail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => Input1.current.focus()}
                    blurOnSubmit={true}
                    errorMessage={Error ? "Please Enter a valid email address" : ''}
                    rightIcon={<FontAwesome5
                        name='user-alt'
                        size={20}
                        color='black'
                    />}
                />

                <Input
                    style={styles.input}
                    value={password}
                    placeholder="password"
                    errorMessage={passError ? passError : null}
                    onChangeText={(password) => setpassword(password)}
                    autoComplete='none'
                    autoCorrect={false}
                    ref={Input1}
                    secureTextEntry={eye === 'eye' ? false : true}
                    rightIcon={
                        <TouchableOpacity onPress={() => eye === 'eye' ? (seteye('eye-off')) : seteye('eye')}>
                            <MaterialCommunityIcons name={eye} size={24} color='black' />
                        </TouchableOpacity>
                    }
                />
                {ErrorMessage ? <Text style={{ margin: 5, color: 'red' }} >{ErrorMessage}</Text> : null}
                <View style={styles.btn}>
                    <Button
                        title={Title}
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(111, 202, 186, 1)',
                            borderRadius: 5,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                        containerStyle={{
                            marginHorizontal: 0,
                            height: 50,
                            marginVertical: 10,
                        }}
                        onPress={() => {
                            if (validate(email) && password.length >= 8) {
                                onSubmitt({ email, password })
                            }
                            if(password.length < 8){
                                setpassError("Password is not valid.")
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
        margin: 10,
        marginTop: 100,
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
        marginVertical: 10
    },
    option: {
        color: '#0483de',
        marginVertical: 5,
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

export default Signin