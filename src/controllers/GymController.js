const Gym = require('../models/Gym')

module.exports = {
    async create(req,res) {
        const { email, password } = req.body
        try {
            const createdGym = await Gym.create({
                email,
                password    
            })
            return res.status(200).send(createdGym)
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async showAll(req,res) {
        try {
            const allGyms = await Gym.find()
            return res.status(200).send(allGyms)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}