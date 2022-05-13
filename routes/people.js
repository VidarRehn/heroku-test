const express = require('express')
const router = express.Router()

const Person = require('../models/people')


// POST

router.post('/', (req, res) => {

    person = new Person({
        firstName: req.body.personFirstName,
        lastName: req.body.personLastName,
        age: req.body.personAge
    })
    
    person.save().then(person => {
        res.send(person)
    }).catch(error => {
        res.status(500).send('Error: ', error)
    })
})

module.exports = router