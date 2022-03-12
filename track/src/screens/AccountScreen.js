import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Avatar, Card, Text } from 'react-native-elements'
import { Context as authContext } from '../context/authContext'

const AccountScreen = () => {
    const { signout } = useContext(authContext)

    return (
        <SafeAreaView style={{ marginTop:60 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text h4 style={styles.title}>AccountScreen</Text>
                    <Card containerStyle={styles.card}>
                        {/* <Card.Title>FONTS</Card.Title> */}
                        {/* <Card.Divider/> */}
                        <View style={styles.avatar}>
                            <Avatar
                                size={64}
                                rounded
                                source={{ uri: 'https://static.wikia.nocookie.net/p__/images/0/04/Jane_Doe.png/revision/latest?cb=20200623093123&path-prefix=protagonist' }}
                                title="Bj"
                                containerStyle={{ backgroundColor: 'grey' }}
                            />
                            <View>
                                <Text style={{ marginLeft: 30, marginTop: 10 }}>Jane Doe</Text>
                                <Text style={{ marginLeft: 30 }}>Email@gmail.com</Text>
                            </View>
                        </View>
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>Details</Card.Title>
                        <Card.Divider />
                        <Text style={styles.fonts} h4>
                            User Name
                        </Text>
                        <Text style={styles.fonts} h4>
                            Phone Number
                        </Text>
                        <Text style={styles.fonts} h4>
                            Address
                        </Text>
                        <Text style={styles.fonts} h4>
                            Email
                        </Text>
                    </Card>


                    <Button
                        title="LogOut"
                        containerStyle={styles.btn}
                        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                        onPress={signout}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        textAlign: 'center'
    },
    card: {
        borderRadius: 5,
        marginBottom: 10,
    },
    avatar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    btn: {
        marginHorizontal: 15,
    }
})

export default AccountScreen