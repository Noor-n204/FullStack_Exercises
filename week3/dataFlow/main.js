const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]


const render = function(){
    for(let post of posts){
        let divPost=$(`<div>${post.name} : ${post.text}</div>s`)
        $("#postsDiv").append(divPost)
    }
}

render()




$("#post").on("click",function(){
    posts.push({
        name : $("#input1").val(),
        text : $("#input2").val()
    })
    $("#postsDiv").empty()
    render()
})

