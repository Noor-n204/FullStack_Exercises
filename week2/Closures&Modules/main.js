// //Exercise 1-----------------------------------------------------------------------------------------
// const StringFormatter=function(){
//     const capitalizeFirst=(str)=> str[0].toUpperCase() + str.slice(1).toLowerCase()

//     const SkewerCase=function(str){
//         return str.replace(/\s/g, "-")
//     }

//     return{
//         capitalizeFirst : capitalizeFirst,
//         toSkewerCase: SkewerCase
//     }
// }

// const formatter = StringFormatter()
// console.log(formatter.capitalizeFirst("dorothy"))
// console.log(formatter.toSkewerCase("blue box"))






// // Exercise 2----------------------------------------------------------------------------------------------
// const Bank= function(){
//     let money=500

//     const depositCash=function(cash){
//         money+=cash
//     }

//     const checkBalance=function(){
//         console.log(money)
//     }

//     return{
//         deposit:depositCash,
//         showBalance : checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950





//Exercise 3----------------------------------------------------------------------------------------------------------------------
const SongsManager= function(){
    const songs={}
    const addSong = function(songName,songLink){
        songLink = songLink.split("").splice(32).join("")
        songs[songName]=songLink
    }

    const getSong = song => console.log("https://www.youtube.com/watch?v=" +songs[song])
     
    return {
        addSong :addSong,
        getSong :getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ




// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()


// const Family= function(){
//     let members = []
//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = Family()
// giveBirth("noor")
// giveBirth("lara")




// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const m = mathOperations()
// console.log(m.add(13,29))
// console.log(m.mult(1.75, 24))
// console.log(m.mult(m.div(36,6),7))




// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('noor')
// usersModule.addUser('lara')
// usersModule.listUsers()
// console.log(usersModule._users)