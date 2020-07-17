const mongoose = require('mongoose')

const Schema = new mongoose.Schema ({
    day: {
        type: Date,
        required: true
    },
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gym',
        required: true
    }
})

module.exports = mongoose.model('Date', Schema)