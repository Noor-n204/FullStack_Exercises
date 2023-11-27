// //Exersice 1---------------------------------------------
// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         console.log('Im no longer hungry!')
//       }
//     }
//   }  
  
//   person.feed() 





//   //Exersice 2----------------------------------------------------
//   const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);




//   //Exercise 3---------------------------------------------------------------
//   const pumpFuel = function (plane) {
//     this.fuel += 1;
//   };
  
//   const airplane = {
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     },
//     fuel: 0
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());




//   //Exercise 4---------------------------------------------------------------
//   const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function(amount) {
//         this.coinCount -= amount;
//     }

//   };

  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);




//   //Exercise 5---------------------------------------------------------------
//   const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     console.log(person.name + " said: "+ result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);




//   //Exercise 6-------------------------------------------------------
//   const coffeeShop = {
//     beans: 40,
  
//     drinkRequirements: {
//       latte: 10,
//       americano: 5,
//       doubleShot: 15,
//       frenchPress: 12
//     },
  
// makeDrink: function (drinkType) {
//     if(!this.drinkRequirements[drinkType]){
//         console.log('Sorry, we don’t make '+drinkType)
//     }
//     else{
//         const reuiredDrinkBeans=this.drinkRequirements[drinkType]
//         if(this.beans>= reuiredDrinkBeans){
//              this.beans-= reuiredDrinkBeans
//          }
//          else{
//               console.log("Sorryy we are all out of beans")
//          }
//     }
// }
//   }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"




    //Exercise 6.1-------------------------------------------------------

    // const coffeeShop = {
    //     beans: 40,
      
    //     drinkRequirements: {
    //       latte: 10,
    //       americano: 5,
    //       doubleShot: 15,
    //       frenchPress: 12
    //     },
      
    //     makeDrink: function (drinkType) {
    //         if(!this.drinkRequirements[drinkType]){
    //             console.log('Sorry, we don’t make '+drinkType)
    //             return
    //         }
    //         const reuiredDrinkBeans=this.drinkRequirements[drinkType]
    //         if(this.beans>= reuiredDrinkBeans){
    //             this.beans-= reuiredDrinkBeans
    //         }
    //         else{
    //             console.log("Sorryy we are all out of beans")
    //         }
    //     }
    // }
      
    //   coffeeShop.makeDrink("latte"); 
    //   coffeeShop.makeDrink("americano");
    //   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
    //   coffeeShop.makeDrink("doubleShot");
    //   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



    //Extention 1---------------------------------------------------------------
    //     const BEANS_PRICE=1
    //     const coffeeShop = {
    //     beans: 40,
    //     money: 1000,
      
    //     drinkRequirements: {
    //       latte: 10,
    //       americano: 5,
    //       doubleShot: 15,
    //       frenchPress: 12
    //     },
      
    //     makeDrink: function (drinkType) {
    //         if(!this.drinkRequirements[drinkType]){
    //             console.log('Sorry, we don’t make '+drinkType)
    //             return
    //         }
    //         const reuiredDrinkBeans=this.drinkRequirements[drinkType]
    //         if(this.beans>= reuiredDrinkBeans){
    //             this.beans-= reuiredDrinkBeans
    //         }
    //         else{
    //             console.log("Sorryy we are all out of beans")
    //         }
    //     },

    //     buyBeans: function (numOfBeans){
    //         let total = numOfBeans* BEANS_PRICE
    //         if(total >this.money){
    //             console.log('you are broke')
    //             return
    //         }
    //         this.money-=total
    //         this.beans+= numOfBeans
    //     }
    // }
      
    //   coffeeShop.makeDrink("latte"); 
    //   coffeeShop.makeDrink("americano");
    //   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
    //   coffeeShop.makeDrink("doubleShot");
    //   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

