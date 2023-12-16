const fetchFurniturePrice = function(){
    let furniture = $("#input-furniture").val()

    $.get(`priceCheck/${furniture}`,function(priceData){
        $("body").append(`<div>${priceData}`)
    })
}

const fetchBuyFurniture = function(){
    let furniture = $("#buy-furniture").val()
    $.get(`priceCheck/buy/${furniture}`, function(buyData){
        $("body").append(`<div>Congratulations, you’ve just bought ${furniture} for ${buyData.price}.There are ${buyData.inventory} left now in the store.`)
    })
}