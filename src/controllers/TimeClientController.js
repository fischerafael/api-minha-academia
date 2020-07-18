const TimeClient = require('../models/TimeClient')
const TimeDay = require('../models/TimeDay')

module.exports = {
    async createTimeClient (req, res) {
        const { client_id, time_id } = req.params

        const maxStudentsPerTimeClient = 4
        
        try{
            const alreadyFull = await TimeClient.find({
                time: time_id
            })            
            if (alreadyFull.length >= maxStudentsPerTimeClient) {
                return res.status(400).send({
                    message: 'Full capacity reached'
                })
            }
            
            const alreadyScheduled = await TimeClient.findOne({
                client: client_id
            }).where({
                time: time_id
            })
            if (alreadyScheduled) return res.status(400).send({ message: 'Already scheduled' })

            const createdTimeClient = await TimeClient.create({
                time: time_id,
                client: client_id
            })          

            await createdTimeClient.populate('client').execPopulate()            
            
            return res.status(200).send(createdTimeClient)
        }catch(err){
            returnError(res, err)
        }
    },

    async deleteTimeClient (req, res) {
        const { gym_id, timeclient_id } = req.params            

        try{
            const deletedTimeClient = await TimeClient.findByIdAndDelete(timeclient_id)    
            if (!deletedTimeClient) {
                return res.status(400)
                    .send({ 
                        message: 'Register does not exist' 
                    })
            }

            return res.status(200)
                .send({
                    message: 'Deleted successfully'
                })

        }catch(err){
            returnError(res, err)
        }
    },

    async listTimeClients (req, res) {
        const { timeclient_id } = req.params

        try{
            const allClients = await TimeClient.find({
                time: timeclient_id
            })            
            return res.status(400).send(allClients)
        }catch(err){
            returnError(res, err)
        }
    }
}

function returnError(res, err){
    return res.status(400).send(err)
}

