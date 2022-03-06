const mongoose = require('mongoose')

// point schema is linked to the trackSchema
const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // This userId is Refrencing 'User' collection.
        ref: 'User'
    },
    name: {
        type: String,
        default: ""
    },
    locations: [pointSchema] 
})

mongoose.model('Track',trackSchema)
