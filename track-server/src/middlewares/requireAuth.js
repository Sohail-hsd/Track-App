const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const My_Secret_key = "My_Secret_key"

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    try {
        if (!authorization) {
            return res.status(401).send({error:"You must be logged in first."})
        }
        // const token = authorization.replace('Bearer ', '')
        jwt.verify(authorization, My_Secret_key, async (err, payload) => {
            if (err) {
                return res.status(401).send({error:"You must be logged in.",message:err.message})
            }
            const { userId } = payload
            const user = await User.findById(userId)
            req.user = user
            next()
        })

    } catch (error) {
        res.status(500).send("Internal server Error.", error.message)
    }
}