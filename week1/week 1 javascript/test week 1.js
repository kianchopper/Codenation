if (1 === "1") {
    console.log(true);
}
else {
    console.log(false);
}
if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);

const grade = 87;
switch(true) {
        case grade >= 70:
            console.log("Distinction");
            break;
        case grade >= 60:
            console.log("Merit");
        case grade >= 50:
            console.log("Pass");
            break;
            default:
                console.log("Failed")
}

let age
age = 20
if (age >= 17) {
    console.log("Yes I can serve you")
}
else if (age < 18) {}
console.log("ok")
}


// let size = "large"
// let typeOfDrink = "White coffee"
// const coffeeOrder = (size, typeOfDrink) => {
//   console.log(coffeeOrder)
// }



// function factorial (n) {
//    if ((n === 0) || (n === 1)) {
//    return 1;
//    } else {
//    return (n * factorial(n-1));
//    }
//    }
//
// const function = (n) =>{
//    if ((n === 0) || (n === 1)) {
//        return 1;
//    } else {
//        return (n * factorial(n - 1))
//    }
// }

// console.log(factorial(33))


let orderCount= 0;
const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}, order ${orderCount}`);
    orderCount++
}
takeOrder("Pineapple")

// let coffeeOrder = [
//     "Alex - Cortado",
//    "Ben - Cortado",
//    "Charlie - Whatever's new"
// ];

// coffeeOrder[1] = "Ann - Vanilla latte"
// console.log(coffeeOrder.length)

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

coffeeOrder.splice(1, 2);
console.log(coffeeOrder)

let favouriteMusic = [
    "Ferrari horses",
    "Viva la vida",
    "Hit em up"
]
console.log(favouriteMusic)


// let favouriteSite = [
//    "youtube",
//    "ebay",
//    "amazon"
//]
//favouriteSite.push("twitter")
//favouriteSite.push("moodle")
//console.log(favouriteSite)


//         array

let favouriteSite = [
    "youtube",
    "ebay",
    "amazon"
]
favouriteSite.push("twitter")
console.log(favouriteSite)


const takeOrde = (topping = "cheese and tomato") => {
    console.log(`Pizza: ${topping}`);
}
takeOrde();
takeOrde("Mushroom");
takeOrde();

const subSandwich = (topping1, topping2, topping3, topping4, topping5) => {
    console.log("your order is" + topping1 + topping2 + topping3 + topping4 + topping5)
}
subSandwich()

let pizzaTop = [
"Cheese",
"Tomato",
"Peppers"
]
pizzaTop.unshift("Pepperoni")
pizzaTop.unshift("Chicken")
console.log(pizzaTop)


// loops
let favDrinks = [
    "coke",
    "fanta",
    "tonic",
    "red bull"
];
for(let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i])
}

let multipleTwo = [];
for (let i = 0; i < 20; i++) {
    if(i % 2 == 0) {
        multipleTwo.push(i)
    }
}

console.log(`Numbers divisable by 2 between 0 and 20 are: ${multipleTwo}.`)

const sumOfNums = (min, max) => {
    let sums = 0;
    for(let i = min; i < max + 1 ; i++) {
        sums += i;
    }
    return sums

}
console.log(`Sum of all numbers from 1 to 10 is ${sumOfNums(1,10)}.`)

let cards = ["Diamond", "Spade", "Heart", "Club"]
let currentCard = "Club";

while(currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)

let favouriteFilms = [
"Pineapple express",
"The Interview",
"Spongebob Movie"
]
favouriteFilms.push

let shoppingList = [
    veg = [
     "Carrots",
     "Apple", 
     "Bannana"],
    meat = [
        "Chicken", 
        "Beef", 
        "Steak"
    ],
    frozen = [
        "Ice cream", 
        "Peas", 
        "Waffles"
    ]
]
console.log(shoppingList[1])

function dataChecker (string, rank) {
    if (string == 'codenation' && rank == 1) {
        console.log(`Both ${string} and ${rank} are correct`);
    } else if (string == "codenation" && rank != 1) {
        console.log(`${string} is correct but the ranking ${rank} isn't`);
    } else{
        console.log(`Both ${string} and/or the ranking ${rank} are wrong`)
    }
    }
    dataChecker("codenation", 1);