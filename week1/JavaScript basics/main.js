// let boughtTesla = true
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = true
// let currentYear = 2018


// if(boughtTesla && isUSCitizen)
// {
//    if(currentYear-yearOfTeslaPurchase>=4)
//    {
//         console.log("would you like an upgrade?")
//         //let answer = prompt("let me now if u want to upgrade")
//         //console.log(answer)
//    }

//    else
//    {
//         console.log("are you satisfied with the car?")
//    }
// }

// else if(isUSCitizen == false && boughtTesla)
// {
//     console.log("would you like to move to the US?")
// }

// else
// {
//     console.log("are you interested in buying one?")
// }





// //Exercise 1------------------------------------------------------

// const numbers = [1,2,3,4,5,6,7,8,9,10]
//  numbers.splice(1,2)
//  //console.log(numbers)

//  numbers[3]=1
//  //console.log(numbers)

// numbers.splice(-4)
// //console.log(numbers)


// let arr=[0]
// arr.push(...numbers)

// console.log(arr)





// //Exercise 1------------------------------------
// let p1 = {
//     name: "Mariah",
//     age: 24,
//     city: "US"
// }

// let p2 = {
//     name: "Noor",
//     age: 24,
//     city: "US"
// }

// if(p1.age== p2.age)
// {
//     if(p1.city==p2.city)
//     {
//         console.log("Jill wanted to date Robert")
//     }

//     else
//     {
//         console.log("Jill wanted to date Robert, but couldn’t")
//     }
// }







// //Exercise 2------------------------------------------

// let book1={
//     title:"haah",
//     author:"lamees"
// }

// let book2={
//     title:"kk",
//     author:"les"
// }

// let book3={
//     title:"ll",
//     author:"hhh"
// }



// let library={  
//     books:[book1,book2,book3],
// }


// //console.log(library.books[1])








// //Exercise 3-------------------------------------------------------------------
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//  const name = prompt('Please enter the name for your reservation');

//   newArr= Object.keys(reservations)
//   consle.log(newArr)
//   if(neowArr[0]==name)
//   {
//     if(reservations[name].claimed==false)
//     {
//         console.log("welcome "+name)
//     }
//     else{
//         console.log("Hmm, someone already claimed this reservation")
//     }
//   }

//   else if(newArr[1]==name)
//   {
//     if(reservations[name].claimed==false)
//     {
//         console.log("welcome"+newArr[1])
//     }
//     else{
//         console.log("Hmm, someone already claimed this reservation")
//     }
//   }

//   else{
//     console.log("You have no reservation")
//   }

//     reservations["noor"]={claimed: true}
//     reservations.noor={claimed: false}
//     console.log(reservations)

//     //console.log(newArr[0].toLowerCase())






// //Exercise 1-------------------------------------------------------------
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []



// for(let i=0; i<names.length;i++)
// {
//     people[i]={name: names[i], age: ages[i]}
// }

// console.log(people)


// //Exercise 2------------------------------------------------

// for(let i=0; i<names.length;i++)
// {
//     console.log(people[i].name+" is "+people[i].age+" years old" )
// }




// //Exercise 3----------------------------------------------------
// // const posts = [
// //     {id: 1, text: "Love this product"},
// //     {id: 2, text: "This is the worst. DON'T BUY!"},
// //     {id: 3, text: "So glad I found this. Bought four already!"}
// // ]


// //   for(let i=0 ; i<posts.length ;i++)
// //   {
// //     if(posts[i].id===2)
// //     {
// //         posts.splice(i,1)
// //     }
// //   }

// //   console.log(posts)

  






// //Exercise 4------------------------------------------------------------
// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]


//   for(let i=0 ; i<posts.length ;i++)
//   {
//     if(posts[i].id==2)
//     {
//         for(let j=0 ; j < posts[i].comments.length;j++)
//         {
//             if(posts[i].comments[j].id==3)
//             {
//                 posts[i].comments.splice(j,1)
//             }
//         }
//     }
//   }

//   console.log(posts[1].comments)


// //Functions--------------------------------------------------------
// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like "+food)
//     }
//   }



// //Exercise 1---------------------------------------------
// function isEven(num){
//     return num%2===0
// }



// //Exercise 2---------------------------------------------
// function oddNumbers(arr){
//     for(let i in arr){
//         if(!isEven(arr[i])){
//             console.log(arr[i])
//         }
//     }
// }


//Exercise 3---------------------------------------------
// function isNumExist(arr,num){
//     for(let i in arr){
        //  if(arr[i]===num){
//             return true
//         }
//     }
//     return false
// }

// //Exercise 4--------------------------------------------------
// const calculator = {
//     add: function(num1,num2) {
//       return num1+num2;
//     },
//     subtract :function(num1,num2) {
//         return num1-num2
//       }
//   }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) 


// //Exercise 5--------------------------------------------------
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


// function makeRegal(name){
//     return "His Royal Highness, "+name
// }

// function increaseByNameLength(money,name){
//     nameLen=name.length
//     return nameLen*money
// }

