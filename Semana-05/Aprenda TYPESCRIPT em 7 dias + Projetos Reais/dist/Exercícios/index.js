"use strict";
let pi = Math.PI;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie} pie`);
let isDouglas;
isDouglas = false;
if (isDouglas) {
    console.log("Oh, hi Douglas!");
}
else {
    console.log("I don't know who you are.");
}
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = parseInt('12345');
console.log(typeof integer, typeof float, typeof hex, typeof binary, typeof octal, typeof negZero, typeof actuallyNumber, typeof largestNumber, typeof mostBiglyNumber);
console.log('\nPause');
console.log(members);
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringAndNumbers];
console.log(allMyArrays);
function addToCart(item) {
    console.log(`Adding ${item.title} to cart.`);
}
addToCart({ id: 12, title: 'Pamonha' });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person('Jane', 31);
console.log(`${person1.name} is ${person1.age} years old.`);
class MC {
    greet(event = 'party') {
        return `Welcome to the ${event}!`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Engineer', 100000);
console.log(`The new employee's title is ${employee.title} and their salary is ${employee.salary}.`);
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const camarada1 = new User('Dog', 1);
camarada1.name = 'Harold';
console.log(camarada1);
const persons = [
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
];
function logPerson(person) {
    let additionalInformation;
    if ('role' in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
persons.forEach(logPerson);
class Animal {
    constructor(name, meters) {
        this.name = name;
        this.meters = meters;
    }
    get move() { return `${this.name} moved ${this.meters} meters.`; }
}
class Snake extends Animal {
    get move() { return 'Slithering...\n' + super.move; }
}
class Pony extends Animal {
    get move() { return 'Galloping...\n' + super.move; }
}
const sammy = new Snake('Sammy the Snake', 33);
const pokey = new Snake('Pokey the Poney', 3000);
console.log(sammy.move);
console.log(pokey.move);
class Furniture {
    constructor(manufacturer = 'IKEA') {
        this.manufacturer = manufacturer;
    }
}
class Desk extends Furniture {
    kind() { console.log(`This is a desk made by ${this.manufacturer}`); }
}
class Chair extends Furniture {
    kind() { console.log(`This is a chair made by ${this.manufacturer}`); }
}
const desk = new Desk();
const chair = new Chair();
desk.kind();
chair.kind();
let multiply;
let capitalize;
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log(capitalize(`nift ${multiply(5, 10)}`));
function layEggs(quantity, color) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job, chicken-me-boy!`);
}
layEggs(7, 'brown');
