// let pet = prompt("What is your pets name")
//this is the pet project
class Animal {
    constructor(petName) {
    this._petName = petName
    this._hunger = 100
    this._thirst = 100
    this._hapiness = 0
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
    get hapiness() {
        return this._hapiness
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
        this._hapiness += 15
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
const gizmo = new Dog("Gizmo")

const eatAndDrink = () => {
    gizmo.eat() 
} 
const walk = () => {
    gizmo.walks
}
eatAndDrink()
console.log(gizmo)