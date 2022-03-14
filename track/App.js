import { SafeAreaProvider } from 'react-native-safe-area-context';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ForgetPassword from './src/screens/ForgetPassword';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import React, { useContext, useEffect } from 'react'
import { Provider as AuthProvider } from './src/context/authContext';
import { navigationRef } from './src/RootNavigation';
import { Context as authContext } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import TryLocalAuth from './src/screens/TryLocalAuth';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function Profile() {
  return (
    <Tab.Navigator screenOptions={{ "tabBarHideOnKeyboard": "true" }} >
      <Tab.Screen
        name='List'
        component={TrackListScreen}
        options={{
          title: 'Track List',
          headerStyle: { backgroundColor: 'rgba(59, 57, 173, 0.28)' },
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='list-alt' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Create'
        component={TrackCreateScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add" color={color} size={26} />
          ),
        }}

      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={26} />
          )
        }}

      />

    </Tab.Navigator>
  );
}
export function App() {
  const { state, tryLocalSignin } = useContext(authContext)

  useEffect(() => {
    tryLocalSignin()
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} >
        <Stack.Navigator initialRouteName={state.initialRouteName} screenOptions={{ headerShown: false }}>
          {
            !state.token ? (
              <>
                <Stack.Screen name='Signin' component={SigninScreen} />
                <Stack.Screen name='Signup' component={SignupScreen} />
                <Stack.Screen name='Forget Password' component={ForgetPassword} />
              </>
            ) : (
              <>
                {/* <Tab.Navigator screenOptions={{ "tabBarHideOnKeyboard": "true" }} >
                </Tab.Navigator> */}
                <Stack.Screen
                  name="Profile"
                  component={Profile}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Details"
                  component={TrackDetailScreen}
                  options={({ route }) => ({ title: route.params.name, headerShown: true })}
                />



              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <TrackProvider>
      <AuthProvider>
        <LocationProvider>
          <App />
        </LocationProvider>
      </AuthProvider>
    </TrackProvider>
  )
}