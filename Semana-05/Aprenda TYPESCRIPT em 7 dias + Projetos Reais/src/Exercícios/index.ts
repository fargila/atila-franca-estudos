//Day 3 - Exercice 1 --------------------------------------------------------------------------------------------------
let pi = Math.PI
let tau = pi * 2
console.log(`${tau} is ${pi} times two.`)

//Day 3 - Exercice 2 --------------------------------------------------------------------------------------------------
let pie: string
pie = 'blueberry'
console.log(`I like to eat ${pie} pie`)

//Day 3 - Exercice 3 --------------------------------------------------------------------------------------------------
let isDouglas: boolean
isDouglas = false
if(isDouglas){ console.log("Oh, hi Douglas!") }
else { console.log("I don't know who you are.") }

//Day 3 - Exercice 4 --------------------------------------------------------------------------------------------------
const integer: number  = 6
const float: number  = 6.66
const hex : number  = 0xf00d
const binary: number  = 0b1010011010
const octal: number  = 0o744
const negZero: number  = -0
const actuallyNumber: number  = NaN
const largestNumber: number  = Number.MAX_VALUE
const mostBiglyNumber: number  = Infinity
const members: number[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber, 
    largestNumber,
    mostBiglyNumber
]
members[0] = parseInt('12345')
console.log(
    typeof integer,
    typeof float,
    typeof hex,
    typeof  binary,
    typeof octal,
    typeof negZero,
    typeof actuallyNumber, 
    typeof largestNumber,
    typeof mostBiglyNumber)
console.log('\nPause')
console.log(members)

//Day 3 - Exercice 5 --------------------------------------------------------------------------------------------------
const sequence: number[]  = Array.from(Array(10).keys())
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong']
// const stringAndNumbers: [number, string, number, string, number, string,] = [1, 'one', 2, 'two', 3, 'three']
const stringAndNumbers: (number | string)[] =  [1, 'one', 2, 'two', 3, 'three']
const allMyArrays: (number | string)[][] = [sequence, animals, stringAndNumbers]
console.log(allMyArrays)

//Day 5 - Exercise 1
interface CartItem{
    id: number
    title: string
    variantId?: number
}

function addToCart(item: CartItem){
    console.log(`Adding ${item.title} to cart.`)
}
addToCart({id: 12, title: 'Pamonha'})


//Day 5 - Exercise 2 --------------------------------------------------------------------------------------------------
interface Creature{
    name:string 
    age: number
}

class Person implements Creature{
    constructor(public name:string, public age: number) {}
}
const person1 = new Person('Jane', 31)
console.log(`${person1.name} is ${person1.age} years old.`)


//Day 5 - Exercise 3 -------------------------------------------------
class MC{
    greet(event: string = 'party'): string{
        return `Welcome to the ${event}!`
    }
}
const mc = new MC()
console.log(mc.greet('show'))


//Day 5 - Exercise 4 --------------------------------------------------------------------------------------------------
class Employee{
    constructor(public title: string, public salary: number){}
}
const employee = new Employee('Engineer', 100000)
console.log(`The new employee's title is ${employee.title} and their salary is ${employee.salary}.`)


//Day 5 - Exercise 5 --------------------------------------------------------------------------------------------------
interface UserSchema{
    id: number
    name: string
}
class User implements UserSchema{
    constructor(public name: string, readonly id: number) {}
}
const camarada1 = new User('Dog', 1)
//console.log(camarada1.id)

camarada1.name = 'Harold'  //pode mudar
//camarada1.id = 4  // ñ pode mudar
console.log(camarada1)


//Day 7 - Exercise 1 --------------------------------------------------------------------------------------------------
interface User3 {
    name: string
    age: number
    occupation: string
}
interface Admin {
    name: string
    age: number
    role: string
}

type Person2 = User3 | Admin

const persons: Person2[] = [
    {
        name: 'Wald Morstitons',
        age: 32,
        occupation: 'Fake Santa Claus'
    },
    {
        name: 'John French',
        age: 77,
        role: 'Spy'
    },
    {
        name: 'Laura Croft',
        age: 52,
        occupation: 'Unemployed'
    },
    {
        name: 'Hebert Riches',
        age: 11,
        role: 'Our little president'
    },
]

function logPerson(person: Person2) {
    let additionalInformation: string;
    if('role' in person) { additionalInformation = person.role }
    else { additionalInformation = person.occupation }

    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}
persons.forEach(logPerson)


//Day 7 - Exercise 2 --------------------------------------------------------------------------------------------------
class Animal {
    constructor(public name: string, readonly meters: number) {}
    get move() { return `${this.name} moved ${this.meters} meters.` }
}
class Snake extends Animal{ 
    override get move() { return 'Slithering...\n' + super.move }
}
class Pony extends Animal { 
    override get move() { return 'Galloping...\n' + super.move }
}
const sammy = new Snake('Sammy the Snake', 33)
const pokey = new Snake('Pokey the Poney', 3000)

console.log(sammy.move)
console.log(pokey.move)


//Day 7 - Exercise 3 --------------------------------------------------------------------------------------------------
class Furniture {
    constructor( protected readonly manufacturer: string = 'IKEA') {}
}

class Desk extends Furniture {
    kind() { console.log(`This is a desk made by ${this.manufacturer}`) }
}
class Chair extends Furniture {
    kind() { console.log(`This is a chair made by ${this.manufacturer}`) }
}

const desk = new Desk()
const chair = new Chair()
desk.kind()
//desk.manufacturer
chair.kind()
//chair.manufacturer


//Day 7 - Exercise 4 --------------------------------------------------------------------------------------------------
let multiply: (val1: number, val2: number) => number
let capitalize: (val: string) => string

capitalize = function(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}
multiply = function(x: number, y: number): number {
    return x*y
}
console.log(capitalize(`nift ${multiply(5, 10)}`))


//Day 7 - Exercise 5 --------------------------------------------------------------------------------------------------
function layEggs(quantity: number, color: string) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job, chicken-me-boy!`)
}
layEggs(7, 'brown')