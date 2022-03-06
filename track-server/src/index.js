require('./models/User')
require('./models/Track')
const express = require('express')
const authRoutes = require('./routes/auth/authRoutes')
const trackRoutes = require('./routes/track/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')
const bodyParser = require('body-parser')
const connectToMongo = require('./db')

connectToMongo() // To connect to Mongo Atlus.

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email : ${req.user.email}`)
})

app.listen(port, () => {
    console.log(`Example app listening http://localhost:${port}!`)
})


// const mongoUri = "mongodb+srv://HSD-19:{Terminus919}@cluster0.kgnol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose.connect(mongoUri)

// mongoose.connection.on('connected', () => {
//     console.log("connected to mongo successfully.!")
// })

// mongoose.connection.on('error', (err) => {
//     console.log("Error connecting to mongo", err)
// })