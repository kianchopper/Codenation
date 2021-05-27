// let pet = prompt("What is your pets name")
//this is the pet project
class Animal {
    constructor(petName) {
    this._petName = prompt("What is your pet name?")
    this._hunger = 100
    this._thirst = 100
    this._happiness = 0
    this._health = 100
    }

    get petName() {
        return this._petName
    }
    get hunger() {
        return this._hunger
    }
    get thirst() {
        return this._thirst
    }
    get happiness() {
        return this._happiness
    }
    get health() {
        return this._health
    }
    eat() {
        this._hunger += 10
    }
    drink() {
        this._thirst += 10
    }
    play() {
        this._happiness += 15
    }
    walks() {
        this._health += 15
    }
}

class Dog extends Animal {
    constructor(petName) {
        super(petName)    
    }
}
const dog = new Dog("");

class Cat extends Animal {
    constructor(petName) {
        super(petName)    
    }
}
let cat = new Cat("");

const eatBTN = document.getElementById("eat");
    eatBTN.addEventListener('click', () => {
        let eating = pet.eat() 
    })
const drinkBTN = document.getElementById("drink");
    drinkBTN.addEventListener('click', () => {
        let drinking = pet.drink() 
    })
const playBTN = document.getElementById("play");
    playBTN.addEventListener('click', () => {
        let playing = pet.play() 
    })
const walksBTN = document.getElementById("walks");
    walksBTN.addEventListener('click', () => {
        let walking = pet.walks() 
    })

