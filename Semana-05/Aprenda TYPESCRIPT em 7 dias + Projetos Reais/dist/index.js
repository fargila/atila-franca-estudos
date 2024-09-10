"use strict";
console.log('Hi there you modafocka!!!!');
let a = 10;
let b = 'Andre';
function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 8);
console.log(result);
let price = 40;
let item = 'laranja';
let inStock = true;
let value;
value = 10;
let values = [10, 20, 40, 69];
let itens = ['Abacaxi', 3, true, 2];
itens[1].toLocaleString;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
    Role[Role["frontUIUX"] = 4] = "frontUIUX";
})(Role || (Role = {}));
const user = {
    firstName: 'Julius',
    age: 10,
    role: Role.frontUIUX
};
console.log(user);
function adicao(num1, num2) {
    return num1 + num2;
}
function resultado(price) {
    console.log('O resultado é: ' + price);
}
resultado(adicao(6, 3));
const usuario = {
    firstName: 'Jão',
    age: 77,
    lastName: 'Comunista'
};
usuario.lastName = 'Gato Amaral';
console.log(usuario);
let itemInput;
let itemName;
itemInput = 10;
itemInput = 'Apple';
if (itemInput === 'string') {
    itemName = itemInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
function userInput(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput('Abacaxi', 'Manga');
console.log(combineName);
let productPrice;
let productName;
productPrice = 10;
productName = 'Livro bom';
const e1 = {
    firstName: 'Andre',
    age: 18,
    id: 222,
    role: 'front-end'
};
let code = 44;
console.log(code);
class Users {
    constructor(num, bal) {
        this.name = num;
        this.balance = bal;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
const user1 = new Users('José', 99);
const user2 = new Users('Brutus', 10000);
user1.addMoney(666);
user2.addMoney(Math.PI);
console.log(user1);
console.log(user2);
let product1;
product1 = {
    name: 'Banana',
    price: 10,
    itemPurchased(message) { console.log(message + this.name + '.'); }
};
product1.itemPurchased('You just bought a ');
class HotelRooms {
}
let room = new HotelRooms();
room.A201 = 'Maria Clara';
room.A240 = 'Julianus Carlus';
room.B101 = 'Kevin Levin';
console.log(room);
class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Clients extends Person1 {
    get greet() {
        return `Dear ${super.greet}.`;
    }
}
class Staff extends Person1 {
    get greet() {
        return `Hi there ${super.greet}!`;
    }
}
let client1 = new Clients('Jão', 'Iacono', 44);
let staff1 = new Staff('Anna', 'Morena', 33);
console.log(client1.greet);
console.log(staff1.greet);
