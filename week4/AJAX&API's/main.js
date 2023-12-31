// const fetch = function (queryType,queryValue) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q='+queryType+':'+queryValue,
//         success: function (data) {
//             data.items.forEach(i => console.log(i.volumeInfo.title+"  ,  "+i.volumeInfo.authors+"  ,  "+i.volumeInfo.industryIdentifiers[0].identifier))


//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
// }




const fetch = function (queryType,queryValue) {
    $.ajax({
        method: "GET",
        url: "https://api.giphy.com/v1/gifs/search?q=food&api_key=D1xDfP4O5HJN4E25Uu2WQs0gjw4gv5sU&limit=5",
        success: function (data) {
            console.log("success got data", data.data[0].embed_url)
            let source=data.data[0].embed_url
            
            $("body").append($("<iframe src="+source+"></iframe>"))
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}


// const fetch = function (queryType,queryValue) {
//     $.ajax({
//         method: "GET",
//         url: "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people",
//         success: function (data) {
//             console.log(data[18].family.pets[0].breed.type)
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
// }


