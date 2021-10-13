const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router.js')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const PORT = 5000
const app = express()
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true 
}
app.use(express.json())
app.use(cors( corsOptions ))
app.use(cookieParser(process.env.KEY_COOKIE))
app.use('/auth', router)



const start = async() => {
    try {
        await mongoose.connect(process.env.KEY_MONGOOSE)
        app.listen(PORT, () => console.log('SERVER START'))
    } catch(e) {
        console.log(e)
    }
}

start()