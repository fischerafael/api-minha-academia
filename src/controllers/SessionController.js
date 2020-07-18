const Gym = require('../models/Gym')

module.exports = {
    async createSession (req, res) {
        const { email, password } = req.body

        try{
            const correctUser = await Gym.findOne({ email })

            if (!correctUser) {
                return res.status(400).send({
                    message: 'Invalid User'
                })
            }

            if (correctUser.password !== password) {
                return res.status(400).send({
                    message: 'Invalid password'
                })
            }

            return res.status(200).send({
                message: 'Logged In',
                user: {
                    _id: correctUser._id,
                    email: correctUser.email
                }
            })

        }catch(err){
            return res.status(400).send(err)
        }
    }
}