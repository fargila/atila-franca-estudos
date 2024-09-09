"use strict";
console.log('Hi there you modafocka!!!!');
let a = 10;
// a = 'Yadriha'
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
// value = 'Andre'
let values = [10, 20, 40, 69];
// Abacaxi, 3, true
let itens = ['Abacaxi', 3, true, 2];
itens[1].toLocaleString;
// const admin = 1
// const read = 2
// const backup = 3
// const frontUIUX = 4
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
// adicao('s', 10)
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
//Don't put anything anylonger in the console type of sutff
// generateError('The application crashed', 500)
// console.log(generateError('The application crashed', 500))
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
