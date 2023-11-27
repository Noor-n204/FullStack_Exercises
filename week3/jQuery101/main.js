// //Exercise 1------------------------------------------------------------------------------------------
// $("body").append('<input type="text" id="name-input" placeholder="Human Name">')
// $("body").append('<button id="addButton">Add human</button>')

// $("body").on("click", "#addButton",function(){
//     $("#ul").append(`<li>${$("#name-input").val()}</li>`)
// })






// //Exercise 2------------------------------------------------------------------------------------------
// $("#ul").on("click","li",function(){
//     $(this).remove()
// })







//Exercise 3------------------------------------------------------------------------------------------------
// $("body").append('<div class="box"></div>')
// $("body").append('<div class="box"></div>')

// $("body").on("mouseenter", ".box",function(){
//     $(".box").css("background-color", "orange")
//     $(this).css("background-color", "#8e44ad")
// })




//Exercise 4---------------------------------------------------------------------------------------------
// $(".item").on("click",function(){
//     if($(this).data().instock){
//         $("#cart").append(`<div class="cart">${$(this).text()}</div>`)
//     }
// })




//Exercise 5---------------------------------------------------------------------------------------------
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

for(let fruit of fruits)
  $("#basket").append(`<div class="${fruit.color}">${fruit.name}</div>`)














// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:first-child").css("color","green")
// $("li:last-child").css("color","pink")
// $("#brown-div").css("color","brown")


// $("#b1").addClass("box")
// $("#b2").addClass("box")

// $('#input').val("Terabyte")


// const barcode = $("#k").data().barcode  
// const expirationDate = $("#k").data().expirationdate  
// console.log("The item with barcode " + barcode+ " will expire on "+expirationDate)



// $("#b1").hover(function(){
//     $("#b1").css("background-color","brown")
// })


// $("button").click(function(){
//     alert($("#my-input").val())
// })



// $(".box").hover(function(){
//     $(this).css("background-color", "blue")
// })



// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')


// $(".feedme").on("click", function(){
//     let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
//     $("body").append($(divCopy))
//   })



// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
  
// for(let name of names){
//     $("body").append(`<div>${name.first} ${name.last}</div>`)
// }

// $("#b1").hover(function(){
//     $(this).remove()
// })



// $("button").on("click", function(){
//     let divCopy = `<div class=blog > texttt </div>`
    
//     $("#blogs").append((divCopy))
//   })


  
// $("#blogs").on("click",".blog",function(){
//     $(this).text("blargh")
// })





