const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person



// const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {useNewUrlParser: true,})
// .catch((err)=> console.log(err))

// const Schema = mongoose.Schema

// const personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number
// })

// const Person = mongoose.model('person', personSchema)

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 })
// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// // let allTheShooberts = [p2, p3, p4, p5]
// // allTheShooberts.forEach(s => s.save())


// Person.findByIdAndUpdate("65918cd37073e0b39ea1cc09", { age: 70 }, { new: true }).then( function (person) {
//     console.log(person)
// })

// Person.findByIdAndDelete("65916024d72b3a30e9bf5f20").then(()=>{
//     let peoplePromise = Person.find({})

//     peoplePromise.then(function (people) {
//         console.log(people)
//     })
//     .catch((err)=>console.log(err))
// })
    





//Spot Check 1----------------------------------------------------------------------------------------

// const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/computerDB", {useNewUrlParser: true,})
// .catch((err)=> console.log(err))

// const Schema = mongoose.Schema

// const computerSchema = new Schema({
//     maker:String,
//     price: Number
// })

// const Computer = mongoose.model('computer', computerSchema)

// let c1 = new Computer({maker:"Apple", price: 9000})
// let c2 = new Computer({maker:"HP", price: 4000})
// let c3 = new Computer({maker:"Apple", price: 10000})
// let c4 = new Computer({maker:"HP", price: 5000})

// const computerArr = [c1, c2, c3, c4]
// for (let index = 0; index < computerArr.length; index++) {
//     computerArr[index].save()    
// }