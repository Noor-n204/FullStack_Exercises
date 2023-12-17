const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true },
]

router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonder', function (req, res) {
    console.log("Someone's trying to make a post request")
    let newObj = req.body
    newObj.visited = false
    wonders.push(newObj)
    console.log(wonders)
    res.end()
})

router.put('/wonder/:name',function(req, res){
    const name = req.params.name
    wonders.find(wonder => wonder.name == name).visited=true
    res.end()

})

router.delete('/wonder/:name',function(req, res){
    const name = req.params.name
    let wondersIndex = wonders.findIndex(w => w.name === name)
    wonders.splice(wondersIndex, 1)
    res.end()

})

module.exports = router