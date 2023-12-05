//write your code here to make the tests pass
class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName
    }
}



class Employee{
    constructor(name){
        this.name = name
    }

    work(office){
        for(let i=0 ; i<10 ;i++){
            let newDocument = new Document(this.name)
            office.documents.push(newDocument)
        }
    }
}



class Manager{
    constructor(name){
        this.name = name
        this.employees = []
    }

    hireEmployee(name){
        this.employees.push(new Employee(name))
    }

    askEmployeesToWork(office){
        this.employees.forEach(employee => employee.work(office));
    }
}


class Cleaner{
    constructor(name){
        this.name = name
    }

    clean(){
        console.log("Clean")
    }
}



class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireManager(name){
        this.managers.push(new Manager(name))
    }


    hireCleaner(name){
        this.cleaners.push(new Cleaner(name))
    }

    startWorkDay(){
        this.managers.forEach(manager => manager.askEmployeesToWork(this))
        this.cleaners.forEach(cleaner => cleaner.clean())
    }
}







//spot check 1-----------------------------------------------------------------------------------------------
// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const dog = new Animal("Teddy" , 4)
// console.log(dog.name)


//spot check 2-----------------------------------------------------------------------------------------------
// class Human{
//     constructor(name, age, isFriendly){
//         this.name=name
//         this.age=age
//         this.isFriendly=isFriendly
//     }
// }


// const person=new Human("Noor", 24 , true)

// const print=function(human){
//     console.log(human.name)
//     console.log(human.age)
//     console.log(human.isFriendly)
// }

// print(person)



//spot check 3-----------------------------------------------------------------------------------------------
// class Animal {
//     constructor(name, numLegs, children) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = children
//     }

//     giveBirth(name){
//         this.children.push(name)
//     }
// }

// const cat=new Animal("Lolo", 4, [])
// cat.giveBirth("Dolly")
// console.log(cat.children)




//spot check 4+5+6-----------------------------------------------------------------------------------------------
// class Vehicle{
//     constructor(x, y, speed, fuel){
//         this.x = x
//         this.y = y
//         this.speed = speed
//         Vehicle.carsSold++
//         this._fuel=fuel
//     }

//     static getInfo(){
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");    }

//     static calculateMoney(){
//         console.log("Made "+Vehicle.carsSold*30000+" dollars")
//     }

//     set fuel(fuel){
//         if(fuel<0 || fuel>150){
//             return console.log("Wronggg number for the fuel")
//         }
//         this._fuel=fuel
//     }

//     get fuel(){
//         return this._fuel
//     }
// }

// Vehicle.carsSold = 0;
// const car1 = new Vehicle(3,4,5,8)
// const car2 = new Vehicle(2,3,4,-9)
// console.log(car2.fuel)

