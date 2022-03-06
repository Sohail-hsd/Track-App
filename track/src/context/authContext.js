import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from "../RootNavigation";


/// Reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case 'signout':
            return { token: null, ErrorMessage: '', initialRouteName: action.payload }
        case 'clearErrorMessage':
            return { ...state, ErrorMessage: '' }
        case 'signin':
            return { ErrorMessage: '', token: action.payload }
        case 'signup':
            return { ErrorMessage: '', token: action.payload }
        case 'changeRoute':
            return {initialRoute:action.payload}
        case "Error":
            return { ...state, ErrorMessage: action.payload }
        default:
            return state
    }
}

/// Action Functions

const initialRoute = (dispatch) => (route) => {
    dispatch({type:'changeRoute',payload:route})
}

const tryLocalSignin = (disaptch) => async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        disaptch({ type: 'signin', payload: token })
        if(!token){
            initialRoute('Signin')
        }
        initialRoute('tryLocalAuth')
    } catch (error) {
        console.log(error.message)
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clearErrorMessage' })
}

const signup = (dispatch) => async ({ email, password }) => {
    // Make api request, to signup route. and handel error
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signup', payload: response.data.token })
    } catch (error) {
        dispatch({ type: 'Error', payload: "Invalid email or password. (Error While signup)" })
        setTimeout(() => dispatch({ type: 'Error', payload: null }), 9000)
    }
}

const signin = (disaptch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        disaptch({ type: 'signin', payload: response.data.token })
    } catch (error) {
        disaptch({ type: 'Error', payload: "Invalid Email or Password.(Error While Signin)" })
        setTimeout(() => disaptch({ type: 'Error', payload: '' }), 9000)
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout', payload: 'Signin' })
}

/// return context.

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin, initialRoute },
    { token: null, ErrorMessage: '', initialRouteName: 'tryLocalAuth' }
)