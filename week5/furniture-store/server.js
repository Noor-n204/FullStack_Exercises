const express= require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function (request, response) {
    let product = request.params.name
    let resultFurniture = store.find((furniture) => furniture.name == product)
    if(resultFurniture == undefined){
        response.send(`price : ${JSON.stringify(null)}`)
    }
    let price = JSON.stringify(resultFurniture.price)
    response.send(`price : ${price}`)
})


app.get('/priceCheck/buy/:name',function(request, response){
    let product = request.params.name
    let resultFurniture = store.find((furniture) => furniture.name == product)
    resultFurniture.inventory--
    response.send(resultFurniture)
})

app.get('/sale', function(request, response){
    let admin = request.query
    if(admin){
        for(let i=0; i<store.length; i++){
            let price = store[i].price
            if(store[i].inventory>10){
                store[i].price = price/2
            }
        }
    }
    response.send(JSON.stringify(store))
})

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});