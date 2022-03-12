import createDataContext from './createDataContext'

// Location Reducer.

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'stopRecording':
            return { ...state, recording: false }
        case 'startRecording':
            return { ...state, recording: true }
        case 'addCurrentLocation':
            return { ...state, currentLocation: action.payload }
        case 'addLocation':
            return { ...state, locations: [...state.locations, action.payload] };
        /// Take the current state, Tack Locations form the current state and new location from action.payload and added into the locations array.
        case 'changeName':
            return { ...state, name: action.payload }
        case 'reset':
            return { ...state, name: '', locations: [] }
        default:
            return state
    }
}

// actions Functions

const changeName = (dispath) => (name) => {
    dispath({ type: 'changeName', payload: name })
}

const startRecording = (dispath) => () => {
    dispath({ type: 'startRecording' })
}

const stopRecording = (dispath) => () => {
    dispath({ type: 'stopRecording' })
}

const addLocation = (dispath) => (location, recording) => {
    dispath({ type: 'addCurrentLocation', payload: location })
    if (recording) {
        dispath({ type: 'addLocation', payload: location })
    }
}

const reset = (dispath) => () => {
    dispath({ type: 'reset' })
}

// exporting Location context and provider.

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, reset },
    { name: '', recording: false, locations: [], currentLocation: null }
)