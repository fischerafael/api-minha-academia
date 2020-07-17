const mongoose = require('mongoose')

const Schema = new mongoose.Schema ({
    time: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Time',
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }
})

module.exports = mongoose.model('TimeClient', Schema)