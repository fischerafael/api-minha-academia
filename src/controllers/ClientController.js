const Client = require('../models/Client')

module.exports = {
    async create(req,res) {
        const { gym_id } = req.params
        const { email, name } = req.body
        try {
            const createdClient = await Client.create({
                email,
                name,
                gym: gym_id    
            })
            return res.status(200).send(createdClient)
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async showAll(req,res) {
        const { gym_id } = req.params
        try {
            const allClients = await Client.find({ gym: gym_id })
            return res.status(200).send(allClients)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}