const TimeDay = require('../models/TimeDay')

module.exports = {
    async createTimes (req, res) {        
        const { time } = req.body
        const { day_id } = req.params
        
        try{
            const hasConflict = await TimeDay.findOne({ time: time }).where({ day: day_id })
            if (hasConflict) return res.status(400).send({ message: 'Hour already scheduled' })

            const successfullyCreated = await createSingleTime(time, day_id)
            return res.status(200).send(successfullyCreated)
        }catch(err){
            return res.status(400).send(err)
        }                  
    },

    async listTimes (req, res) {
        const { day_id } = req.params

        try{
            const allTimesOfADay = await TimeDay.find({ day: day_id }).populate('day')
            return res.status(200).send(allTimesOfADay)
        }catch(err){
            return res.status(400).send(err)
        }
    }
}

async function createSingleTime(time, day) {
    const createdTime = await TimeDay.create({
        time: time,
        day: day
    })
    return createdTime
}