const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,        
        lowercase: true,
    },
    name: {
        type: String,
        required: true
    },
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gym',
        required: true
    }
})

module.exports = mongoose.model('Client', Schema)