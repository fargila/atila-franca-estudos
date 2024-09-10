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

//--Alias Type of stuff --------------------------------------------------------------------------------------------------
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

let code: number = 44
console.log(code)

//I hate this place...
//POO  --------------------------------------------------------------------------------------------------

class Users {
    public  name: string
    private balance: number

    constructor(num: string, bal: number){
        this.name    = num
        this.balance = bal
    }
    
    addMoney(amount: number){
        this.balance += amount
    }
}
const user1 = new Users('José', 99)
const user2 = new Users('Brutus', 10000)

// user1.balance = 22.99
user1.addMoney(666)
user2.addMoney(Math.PI)
console.log(user1)
console.log(user2)

//Interfaces --------------------------------------------------------------------------------------------------
interface Item{
    name: string
    price: number

    itemPurchased(message: string): void
}

let product1: Item
product1 = {
    name: 'Banana',
    price: 10,
    itemPurchased(message: string) { console.log(message + this.name + '.')}
}
product1.itemPurchased('You just bought a ')

/*
public    ->  pode alterar e acessar fora da classe
readonly ->  pode acessar, mas não pode alterar fora da classe
private   ->  não pode acessar, nem alterar fora da classe
*/

class HotelRooms {
    [roonNumber: string]: string
}
let room = new HotelRooms()

room.A201 = 'Maria Clara'
room.A240 = 'Julianus Carlus'
room.B101 = 'Kevin Levin'

console.log(room)

class Person1 {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    get greet(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Cliente do banco
class Clients extends Person1 {
    override get greet(){
        return `Dear ${super.greet}.`
    }
}
//Funcionário do banco
class Staff extends Person1 {
    override get greet(){
        return `Hi there ${super.greet}!`
    }
}
let client1 = new Clients('Jão', 'Iacono', 44)
let staff1 = new Staff('Anna', 'Morena', 33)

console.log(client1.greet)
console.log(staff1.greet)