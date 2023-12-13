const validator = require(`validator`)
const {faker} =require(`@faker-js/faker`)

const isMail = validator.isEmail("shoobert@dylan")
const isPhone = validator.isMobilePhone("786-329-9958")


let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
const newText=validator.blacklist(text, blacklist)
console.log(newText)





const makeHuman = function(number){
    const arr=[]
    for(let i=0; i<number; i++){
        let p = {name : "", companyName : ""}
        p.name=faker.person.firstName()
        p.companyName = faker.company.name()
        arr.push(p)
    }
    console.log(arr)
}

makeHuman(2)