const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./utils/router')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3333, () => console.log('Server runninig on port 3333'))