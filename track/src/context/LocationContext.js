import createDataContext from './createDataContext'

// Location Reducer.

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'addCurrentLocation':
            return { ...state, currentLocation: action.payload }
        default:
            return state
    }
}

// actions Functions

const startRecording = (dispath) => () => {

}

const stopRecording = (dispath) => () => {

}

const addLocation = (dispath) => (location) => {
    dispath({ type: 'addCurrentLocation', payload: location })
}

// exporting Location context and provider.

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, location: [], currentLocation: null }
)