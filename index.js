const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
const peopleRoute = require('./routes/people')

const PORT = process.env.PORT || 3000

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// routes

app.use('/api/people', peopleRoute)


// connect to mongoDB Atlas

mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser: true})
    .then(() => {
    console.log('Connected to MongoDB Atlas')
})


app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})