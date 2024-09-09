//Day 3 - Exercice 1 --------------------------------
let pi = Math.PI
let tau = pi * 2
console.log(`${tau} is ${pi} times two.`)

//Day 3 - Exercice 2 --------------------------------
let pie: string
pie = 'blueberry'
console.log(`I like to eat ${pie} pie`)

//Day 3 - Exercice 3 --------------------------------
let isDouglas: boolean
isDouglas = false
if(isDouglas){ console.log("Oh, hi Douglas!") }
else { console.log("I don't know who you are.") }

//Day 3 - Exercice 4 --------------------------------
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

//Day 3 - Exercice 5 --------------------------------
const sequence: number[]  = Array.from(Array(10).keys())
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong']
// const stringAndNumbers: [number, string, number, string, number, string,] = [1, 'one', 2, 'two', 3, 'three']
const stringAndNumbers: (number | string)[] =  [1, 'one', 2, 'two', 3, 'three']
const allMyArrays: (number | string)[][] = [sequence, animals, stringAndNumbers]
console.log(allMyArrays)