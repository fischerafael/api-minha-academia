const mongoose = require('mongoose')

const Schema = new mongoose.Schema ({
    time: {
        type: Number,
        required: true
    },
    day: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Date',
        required: true
    }
})

module.exports = mongoose.model('TimeDay', Schema)