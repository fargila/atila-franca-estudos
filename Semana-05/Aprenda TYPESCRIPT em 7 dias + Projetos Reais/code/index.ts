console.log('Hi there you modafocka!!!!')

let a = 10
// a = 'Yadriha'
let b = 'Andre'

function add(num1: number, num2: number){
    return num1+num2
}

let result = add(5, 8)
console.log(result)

let price = 40
let item = 'laranja'
let inStock = true
let value: number
value = 10
// value = 'Andre'

let values: number[] = [10, 20, 40, 69]

// Abacaxi, 3, true
let itens: [string, number, boolean, any] = ['Abacaxi', 3, true , 2]
itens[1].toLocaleString

// const admin = 1
// const read = 2
// const backup = 3
// const frontUIUX = 4
enum Role {admin = 1, read = 2, backup = 3, frontUIUX = 4}
const user = {
    firstName : 'Julius',
    age: 10,
    role: Role.frontUIUX
}
console.log(user)

function adicao(num1:number, num2:number): number{
    return num1 + num2
}
// adicao('s', 10)

function resultado(price: number){
    console.log('O resultado é: '+price)
}
resultado(adicao(6, 3))

//--Alias Type of stuff ------------------------------
type Usuarios = {
     firstName: string,
    age: number
    lastName: string
}
const usuario: Usuarios = {
    firstName: 'Jão',
    age: 77,
    lastName: 'Comunista'
}
usuario.lastName = 'Gato Amaral'
console.log(usuario)

let itemInput: unknown
let itemName: string
itemInput = 10
itemInput = 'Apple'
if(itemInput === 'string')  { itemName = itemInput }

function generateError(message: string, code: number): never{
    throw{ message: message, errorCode: code }
}
//Don't put anything anylonger in the console type of sutff
// generateError('The application crashed', 500)
// console.log(generateError('The application crashed', 500))

function userInput(input1: number | string, input2: number | string){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number'){ result = input1 + input2 }
    else{ result = input1.toString() + input2.toString() }
    return result
}
const combinePrices = userInput(10, 20)
console.log(combinePrices)
const combineName = userInput('Abacaxi', 'Manga')
console.log(combineName)

let productPrice: 10 | 20 | 30
let productName: 'Livro bom' | 'Livro medríocre' | 'Os filhos de Ananis'
productPrice = 10
productName = 'Livro bom'

type Colega = {
    firstName: string
    age: number
}
type JobRole = {
    id: number
    role: string
}
type employee = Colega & JobRole
const e1: employee = {
    firstName: 'Andre',
    age: 18,
    id: 222,
    role: 'front-end'
}
