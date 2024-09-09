"use strict";
//Day 3 - Exercice 1 --------------------------------
let pi = Math.PI;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
//Day 3 - Exercice 2 --------------------------------
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie} pie`);
//Day 3 - Exercice 3 --------------------------------
let isDouglas;
isDouglas = false;
if (isDouglas) {
    console.log("Oh, hi Douglas!");
}
else {
    console.log("I don't know who you are.");
}
//Day 3 - Exercice 4 --------------------------------
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
