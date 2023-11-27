// const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down")
// console.log(down)
// console.log(down.innerHTML)
// down.innerHTML = "Down"

// document.getElementById("ball").style.backgroundColor  = "yellow"





// let list= document.getElementsByClassName("list")
// console.log(list)

// const addStr =function(){
//     let newLi = document.createElement("li")
//     newLi.innerHTML="new string"
//     list.appendChild(newLi);

// }



// const box = document.getElementById("box")
// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }


// const changeColor = function () {
//     box.style.backgroundColor = "#8e44ad";
// }








//Exercise 1-----------------------------------------------------------------------------------------------------------------------
// const moveRight = function(){
//     const ball = document.getElementById("ball")
//     let left = parseInt(ball.style.left) || 0
//     left += 15
//     ball.style.left = left + "px"
// }
// const moveLeft = function(){
//     const ball = document.getElementById("ball")
//     let right = parseInt(ball.style.left) || 0
//     right -= 15
//     ball.style.left = right + "px"
// }
// const moveUp = function(){
//     const ball = document.getElementById("ball")
//     let down = parseInt(ball.style.top) || 0
//     down -= 15
//     ball.style.top = down + "px"
// }
// const moveDown = function(){
//     const ball = document.getElementById("ball")
//     let up = parseInt(ball.style.top) || 0
//     up += 15
//     ball.style.top = up + "px"
// }



// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)


// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "Game by: ~The Creator~"
// subHeader.setAttribute("class", "my-subHeader")
// document.body.appendChild(subHeader)






//Exercise 2--------------------------------------------------------------------------------------------------------------
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }


// const checkReservation= function(){
//     let name=document.getElementById("input").value;
//     console.log(name)
//     if(!reservations[name]){
//         console.log("You have no reservation")
//     }
//     else{
//         if(!reservations[name].claimed){
//             console.log("Welcome, "+name)
//         }
//         else{
//             console.log('Hmm, someone already claimed this reservation')
//         }
//     }
// }









//Exercise 3----------------------------------------------------------------------------------------------------------------------
// const enterColor = function () {
//     this.style.backgroundColor = "#c0392b"
// }


// const leaveColor = function () {
//     this.style.backgroundColor = "#1abc9c"
// }

// let boxes=document.getElementById("container")

// for(let i=0 ; i<10; i++){
//     let box = document.createElement("div")
//     box.setAttribute("class" , "myBox")
//     box.onmouseenter = enterColor
//     box.onmouseleave = leaveColor
//     //box.addEventListener("onmouseleave" , leaveColor)
//     //box.setAttribute("mouseleave" , "leaveColor()")
//     box.style.backgroundColor= "#ff0000"
//     boxes.appendChild(box)
// }





//Exercise 4-----------------------------------------------------------------------------------------------------------------------
const validate =function(){
    let signUp=document.getElementById("signUp")
    let nameVal=document.getElementById("inputName").value
    if(nameVal.length < 3){
        const errorStr=document.createElement("h3")
        errorStr.innerHTML='Name is missing'
        signUp.appendChild(errorStr)
        
    }

    let salaryVal=document.getElementById("inputSalary").value
    if(parseInt(salaryVal)<10000 || parseInt(salaryVal)>16000){
        const errorStr=document.createElement("h3")
        errorStr.innerHTML='Error salary'
        signUp.appendChild(errorStr)
    }

    let birthdayVal=document.getElementById("inputBirthday").value
    if(!birthdayVal){
        const errorStr=document.createElement("h3")
        errorStr.innerHTML='Enter birthday'
        signUp.appendChild(errorStr)
    }

    let phoneVal=document.getElementById("inputPhone").value
    if(phoneVal.length != 10){
        const errorStr=document.createElement("h3")
        errorStr.innerHTML='Incorrect phone number'
        signUp.appendChild(errorStr)
    }

}

