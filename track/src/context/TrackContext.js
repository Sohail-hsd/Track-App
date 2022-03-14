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
    // console.log(response.data)
    dispatch({ type: 'fetchTracks', payload: response.data })
}

const createTrack = (dispatch) => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', { name, locations })
    } catch (error) {
        console.log(error)
    }

}

// Extracting context.

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTrack, createTrack },
    []
)