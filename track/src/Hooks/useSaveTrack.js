import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import * as RootNavigation from '../RootNavigation';


// Coordination Between Contexts.
export default () => {
    const { createTrack } = useContext(TrackContext)
    const { state: { locations, name }, reset } = useContext(LocationContext)

    const saveTrack = async () => {
        try {
            await createTrack(name, locations)
            reset()
            RootNavigation.navigate('List')
        } catch (error) {
            console.log(error)
        }
        
    }
    return [saveTrack]
}