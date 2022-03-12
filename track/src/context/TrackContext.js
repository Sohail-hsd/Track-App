import trackerApi from "../api/trackerApi";
import createDataContext from "./createDataContext";
// import * as RootNavigation from "../RootNavigation";

/// Track Reducer.
const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetchTracks':
            return action.payload
        default:
            return state
    }
}

// Action Functions

const fetchTrack = (dispatch) => async () => {
    const response = await trackerApi.get('/GetTracks')
    dispatch({ type: 'fetchTracks', payload: response.data })
}

const createTrack = (dispatch) => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })

}

// Extracting context.

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTrack, createTrack },
    []
)