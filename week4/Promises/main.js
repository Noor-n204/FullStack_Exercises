//Exercise 1-------------------------------------------------------------------------------------
class APIManager{
    fetchWord(){
        return $.get("https://random-word-api.herokuapp.com/word")
    }

    fetchBookByTitle(title){
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`)

    }

    fetchGIF(title){
        return $.get(`https://api.giphy.com/v1/gifs/search?q=${title}&api_key=D1xDfP4O5HJN4E25Uu2WQs0gjw4gv5sU&limit=5`)
    }
}

class Renderer{
    render(wordPromise){
        wordPromise.then((word) =>{
            console.log(word)
            const bookPromise = apiManager.fetchBookByTitle(word)
            const GIFpromise = apiManager.fetchGIF(word)
            Promise.all([bookPromise, GIFpromise])
            .then((promiseResult) => {
                var [booksArr , GIFarr]= promiseResult
                const bookTitle=booksArr.items[0].volumeInfo.title
                let source=GIFarr.data[0].embed_url
                $("body").append($("<iframe src="+source+"></iframe>"))
                $("body").append($("<div>"+bookTitle+"</div>"))
            })
        })
    }
}

const apiManager = new APIManager()
const renderer = new Renderer()

renderer.render(apiManager.fetchWord())