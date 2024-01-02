const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/SolarSystem", {
  useNewUrlParser: true,
})
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))



const solarSystemSchema = new Schema({ 
    planets : [{type: Schema.Types.ObjectId, ref: 'Planets'}], 
    starName: String
  })




  const planetSchema = new Schema({ 
    name: String,
    system  : {type: Schema.Types.ObjectId, ref: 'SolarSystem'}, 
    visitors : [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
  })



  const visitorSchema = new Schema({ 
    name: String,
    homePlanet : {type: Schema.Types.ObjectId, ref: 'Planets'}, 
    visitedPlanets : [{type: Schema.Types.ObjectId, ref: 'Planets'}]
  })



  const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema)
  const Planet = mongoose.model("Planets", planetSchema)
  const Visitor = mongoose.model("Visitor", visitorSchema)





  let solarSystem = new SolarSystem({
    planets : [], 
    starName: "Noor"
})


let planet = new Planet({
    name: "Hadi",
    system  : {}, 
    visitors : []
})
let planet1 = new Planet({
    name: "Alex",
    system  : {}, 
    visitors : []
})



let visitor = new Visitor({
    name: "abo mazin",
    homePlanet : {}, 
    visitedPlanets : []
})

solarSystem.planets.push(planet)

planet.system=solarSystem
planet.visitors.push(visitor)

planet1.system=solarSystem
planet1.visitors.push(visitor)

visitor.homePlanet=planet
visitor.visitedPlanets.push(planet)
visitor.visitedPlanets.push(planet1)



// solarSystem.save()
// visitor.save()
// planet.save()
// planet1.save()


// Visitor.find({})
// .populate("visitedPlanets")
// .exec().then((visitor)=>{
//     console.log(visitor[0].visitedPlanets)
// })


// Planet.find({})
// .populate("visitors")
// .exec().then((planet)=>{
//     console.log(planet)
// })


SolarSystem.find({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors',
            populate:{
                path : 'homePlanet visitedPlanets'
                
            }
        }
    })
    .exec().then(function (solarSystem) {
        console.log(solarSystem[0].planets[0].visitors)
    })
