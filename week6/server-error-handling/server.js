const express = require('express')
const usersModule = require('./users')
const users = usersModule.usersModule()
const path = require('path')
const errors =require('./errors')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))





app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)

    if (userIndex === -1) {
        res.status(404).send({ "Error": `User ${username} does not exist` })
    } else {
        users.splice(userIndex, 1)
        res.status(204).end()
    }
})


app.post('/users', function (req, res) {
    const newUser = req.body
    const username = newUser.username
    try{
        users.add(newUser)
        
        res.status(201).end()
    } catch (error) {
        if (error instanceof errors.InvalidUsernameError){
            res.status(400).send({ "Error": `${username} is not a valid name` })
        } else if (error instanceof errors.DuplicatedResourceError){
            res.status(409).send({ "Error": `User ${username} already exist` })
        }
    }
})


app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)
    users.splice(userIndex, 1)
    res.status(204).end()
})

const port = 3000 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})