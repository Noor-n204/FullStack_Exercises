const express = require('express')
const router = express.Router()

const Person = require('../../models/person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})

router.post('/person', function (req, res){
    const newPerson = req.body
    console.log(newPerson)
    let p1 = new Person(newPerson)
    p1.save()
    res.send("hello world")
})

router.put('/person/:id',function(req, res){
    const _id = req.params.id
    Person.findByIdAndUpdate(_id, { age: 80 }, { new: true }).then( function (person) {
    console.log(person)})
    res.end()

})

router.delete('/apocalypse', function(req, res){
    Person.deleteMany({}).then(function(people){
        console.log(people)
        res.end()
    })
})

module.exports = router