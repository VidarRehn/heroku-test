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
    })
})

// GET all

router.get('/', (req, res) => {
    Person.find().then(people => {
        res.send(people)
    })
})


// GET by id

router.get('/:id', (req, res) => {
    Person.findById(req.params.id).then(person => {
        res.send(person)
    })
})

// UPDATE

router.put('/:id', (req, res) => {
    const updatedPerson = Person.findByIdAndUpdate(req.params.id, {
        firstName: req.body.personFirstName,
        lastName: req.body.personLastName,
        age: req.body.personAge
    },{
        new: true
    }).then(person => {
        res.send(person)
    })
})

// DELETE

router.delete('/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id).then(person => {
        res.send(person)
    })
})

module.exports = router