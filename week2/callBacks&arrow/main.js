// //Exercise 1---------------------------------------------------------------------------------
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   const pushPull=function(callBack){
//     callBack()
//   }
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"





// //Exercise 2---------------------------------------------------------------------------------------
// const returnTime = function (time) {
//     console.log('The current time is: ' + time)
//   }
  

// const getTime=function(callBack){
//     const time=new Date()
//     callBack(time)
// }

// getTime(returnTime)





// //Exercise 3---------------------------------------------------------------------------------------------
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
// const logData=function(data){
//     console.log(data)
// }
//   displayData(alert, logData, "I like to party")



//Exercise 4-----------------------------------------------------------------------------------------------------------------
// const add=(x,y,z)=> x+z+y
//console.log(add(5,4,1))



//Exercise 5--------------------------------------------------------------------------------------------------------
// const capitalize=(str)=> str[0].toUpperCase() + str.slice(1).toLowerCase()



// //Exercise 6-----------------------------------------------------------------------------------
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }
// const commentOnWeather = temp => console.log("it's "+determineWeather(temp))







//Exercise 7---------------------------------------------------------------------------------------------
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")