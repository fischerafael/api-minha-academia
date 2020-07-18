const Client = require('../models/Client')

module.exports = {
    async create(req,res) {
        const { gym_id } = req.params
        const { email, name } = req.body        
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(400)
                .send({
                    message: 'No token'
                }) 
        }

        if (gym_id !== authorization) {
            return res.status(400)
                .send({
                    message: 'Unauthorized'
                }) 
        }

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