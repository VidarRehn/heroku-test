const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})


module.exports = new mongoose.model('Person', dataSchema)