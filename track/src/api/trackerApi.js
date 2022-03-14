import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://40cc-39-60-101-6.ngrok.io',
})

// This will take two function. (config) this object have access to all of our request compenets(headers,auth-token etc)
// This will add our token automatically to our request.
instance.interceptors.request.use(
    
    async (config) => {
        // Getting token from async storage.
        const token = await AsyncStorage.getItem('token')
        if (token) {
            // config.headers.post['Content-Type'] = 'application/json';
            config.headers.Authorization = token
        }
        return config
    },
    (err) => {
        return Promise.reject('Requested rejected', err)
    }
)


export default instance