const mongoose = require('mongoose')

const mongoUri = "mongodb+srv://HSD-19:{Terminus919}@cluster0.kgnol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUri)


const connectToMongo = () => {
    mongoose.connection.on('connected', () => {
        console.log("connected to mongo successfully.!")
    })
    
    mongoose.connection.on('error', (err) => {
        console.log("Error connecting to mongo", err)
    })
}


module.exports = connectToMongo
