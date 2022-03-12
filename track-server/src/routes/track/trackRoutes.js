const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../../middlewares/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router()

router.use(requireAuth)

router.post('/tracks', async (req, res) => {
    await Track.find({ userId: req.user._id })
    const { name, locations } = req.body
    if (!name || !locations) {
        return res.status(422).send({ error: "Must Provide name and locations" })
    }
    try {
        const track = new Track({ name, locations, userId: req.user._id })
        await track.save()
        res.send({ track })

    } catch (error) {
        return res.status(422).send('Unhandel', { error: error.message })
    }

})

router.get('/getTracks', async (req, res) => {
    try {
        console.log(req.user._id)
        const track = await Track.find({ userId: req.user._id })
        res.send(track)
    } catch (error) {
        console.log(error.message)
        res.send("Internal Server Error.!");
    }
})

module.exports = router