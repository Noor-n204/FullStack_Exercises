const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let wordCounter = {noor : 6, lara: 7}

app.get('/sanity', function (req, res){
    res.send("Server is up and running")
})

app.get('/sanity/:word', function (req, res){
    const word = req.params.word
    if(wordCounter[word]){
        res.send({count : wordCounter[word]})
    }
    else{
        res.send({count : 0})
    }
})

app.post('/sanity', function(req, res){
    const wordObj = req.body
    const word = wordObj.word
    if(wordCounter[word]){
        wordCounter[word]++
    }
    else{
        wordCounter[word]=1
    }
    res.send({text: `Added ${word}`, currentCount: wordCounter[word] })
})

app.post('/sanity/:sentence', function(req, res){
    const sentence = req.params.sentence
    let numNewWords = 0
    let numOldWords = 0
    const arrayOfWords = sentence.split(" ")
        for(let word of arrayOfWords){
        if(wordCounter[word]){
            wordCounter[word]++
            numOldWords++
        }
        else{
            wordCounter[word]=1
            numNewWords++
        }
    }
    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

app.delete('/sanity/:word', function(req, res){
    const word = req.params.word
    if(wordCounter[word]){
        delete wordCounter[word]
        res.send({text : `deleted ${word}`})

    }
    else{
        res.status(404).send("there is nothing to delte")

    }

})

const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})