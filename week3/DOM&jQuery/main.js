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
    $(this).closest(".computer").find(".QR").each(function( index ) {
      console.log($( this ).text() );
    });
  })








