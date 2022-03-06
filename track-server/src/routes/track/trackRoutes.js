const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../../middlewares/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router()

router.use(requireAuth)

router.post('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id })
    const {name , locations} = req.body
    if(!name || !locations){
        return res.status(422).send({error:"Must Provide name and locations"})
    }
    try {
        const track = new Track({name, locations, userId:req.user._id})
        await track.save()
        res.send({track})
        
    } catch (error) {
        return res.status(422).send({error:error.message})
    }

})

module.exports = router