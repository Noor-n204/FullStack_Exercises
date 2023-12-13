const x = require('./consts');

let complaint = {text : "some string", type: "weather"}


const handleComplaint = function(complaint){
    switch(complaint.type){
        case x.finance :
            console.log("Money doesn’t grow on trees, you know.")
            break ;
        case x.weather :
            console.log("It is the way of nature. Not much to be done.")  
            break;
        case x.emotions :
            console.log("It’ll pass, as all things do, with time.")
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}

module.exports = {
    handleComplaint : handleComplaint
}