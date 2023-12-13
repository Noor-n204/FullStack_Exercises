const complaintsHandler = require('./complaintsHandler')
const consts = require('./consts')



let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.emotions
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.finance
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.weather
}

complaintsHandler.handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."