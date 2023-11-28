$('.generator').on('click', function() {
    const idArr=[]
    console.log($(this).closest("div").attr("id"))
    console.log($(this).closest(".computer").data().id)
    idArr.push({cmp_id : $(this).closest(".computer").data().id})
    console.log($(this).closest(".computer").find(".BUS").text())
  })



  $(".validator").on("click", function(){
    console.log($(this).closest(".computer").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".QR").text())
  })








// $('button').on('click', function() {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
//   })

// $('button').on('click', function(){
//     console.log($(".container").find("p").text())
// })