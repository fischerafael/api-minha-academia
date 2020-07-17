const Day = require('../models/Day')

module.exports = {
    async createDate (req, res) {
        const { year, month, day } = req.body
        const { gym_id } = req.params

        const dataDay = new Date(year, month, day)        
        
        try{
            const conflictDay = await Day.findOne({ day: dataDay }).where({ gym: gym_id })
            if (conflictDay) return res.status(400).send({ message: 'Day already exists' })

            const createdDay = await Day.create({
                day: dataDay,
                gym: gym_id
            })            
            return res.status(200).send(createdDay)
        }catch(err){
            return res.status(400).send(err)
        }
    },

    async listDates (req, res) {
        const { gym_id } = req.params
        try{
            const allDates = await Day.find({ gym: gym_id }).populate('gym')            
            return res.status(200).send(allDates)
        }catch(err){
            return res.status(400).send(err)
        }
    },

    async deleteDate (req, res) {
        const { gym_id, day_id } = req.params
        try{           
            const deletedDay = await Day.findByIdAndDelete(day_id)
            if (!deletedDay) return res.status(400).send({ message: "Day does not exist"})
            return res.status(200).send({ message: "Deleted successfully" })
        }catch(err){
            return res.status(400).send(err)
        }
    }
}