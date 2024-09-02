//Seção 2&3
console.log('JavaScript está funcionando faz tempo')

let firsNname = 'Átila '
let lastName = 'Nascimento'
console.log(firsNname + lastName)

const price = 30
//price = 20
console.log(price)

let itemName = 'Pen'
let itemPrice = 3
let itemIsHere = true
let itemColor = 'Blue'
itemName = null

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemIsHere: true,
    itemColor: 'Blue'
}
//pen.itemColor = 'Azul'
console.log(pen)
console.log(typeof pen)

let friends = ['Bobo', 'Homenzinho-torto', 'Cachorra']
console.log(friends)

function saleStatus(status, total){
    console.log('Transição: ' + status + ' Valor total: ' + total)
}
saleStatus('Approved', 70)

function percentage10(price){
    return price - (price * 10 / 100)
}
console.log(percentage10(45))

let num1 = 3
let num2 = '3'

console.log(num1 == num2)
console.log(num1 === num2)

let drivr = 90
let speed = drivr > 110 ? 'Above' : 'Below'

// and -> &&
// or  -> ||
// not -> !

let corClient = undefined
let corEstoque = 'Blue'

let corVendida = corClient || corEstoque
console.log(corVendida)

const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}
for(let a in myCar){
    console.log(a, myCar[a])
}

const migos = ['Pivete', 'Julius', 'JC']
for(let b of migos)
    console.log(b)


//-----------------------------------------------------
//Seção 4

// let bookTitle = 'Como estudar como um nerdola'
// let bookAuthor = 'Meu Amigo'
// let bookPages = 504

function factoryCreateBook(title, author, pages, ){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function(){
            console.log('Printing...')
        }
    }
    return book
}

function constructorCreateBook(title, author, pages){
    this.bookTitle = title,
    this.bookAuthor = author,
    this.bookPages = pages

}

const book3 = new constructorCreateBook('O Jovem Calmo', 'Benedito Jamas', 555)

const book1 = factoryCreateBook('Atomic', 'James', 451)
const book2 = factoryCreateBook('Estranho Amigo', 'Jarbas', 221)
book1.color = 'White'

console.log(book1)
console.log(book2)
console.log(book3)

let message = 'Stop! You violated the law!'
console.log(message.length)

let someone = 'alguém'
const email = 'Tiririn, tiririn, tiririn, \nalguém ligou pra mim!'
const email2 = `Tiririn, tiririn, tiririn, 
${someone} ligou pra mim!`

console.log(email)
console.log(email2)


//-----------------------------------------------------
//Seção 5

const druzii = ['Yadriha', 'Marcus', 'Sergei']
const nums = [5,6,7,8,55]
nums.push(9)
nums.unshift(23,44,123)
nums.splice(4, 0, 2,5,1,6,12,56)

console.log(druzii)
console.log(nums)
console.log(druzii.indexOf('Sergei'))

const movies = [
    {id:1, movieName: 'Cidade de Deus'},
    {id:2, movieName: 'O Sigma'},
    {id:3, movieName: 'Borderlands The Movie'}
]

console.log(movies.includes({id:1, movieName: 'Cidade de Deus'}))
console.log(movies.find(function(movie){
    return movie.movieName == 'O Sigma'
}))

console.log(movies.find(movie => movie.movieName == 'O Sigma'))

const numArray = [5,6,7,8]
const final = numArray.pop()
//const final = numArray.shift()
//const final = numArray.splice(x, y) -> a partir do index x remove y itens
console.log(numArray)

//Remover itens de um array
const arrayA = [9,8,7,6,5]
arrayA = []
arrayA.splice(0,4)
console.log(arrayA)

let numeros = [3,4,6,8,44,2]
let letters = ['a','b','c']

all = numbers.concat(letters)
half = all.slice(3, 5)

console.log(all)
console.log(half)

let clients = ['José Maria', 'Marineide', 'Ágabo']
console.log(clients)

console.sort()
console.reverse()

let clientsJoin = clients.join(', ')
console.log(clientsJoin)

//verificar dentro de um array
const tempLondon = [18, 13, 8, 2]
const tempPositive = tempLondon.every(function(value){
    return value >= 0
})

//filtrar um array
console.log(tempLondon.filter(function(value){
    return value >= 0
}))

console.log(tempPositive)



//-----------------------------------------------------
//Seção 6

function movie(){ console.log('O mentiroso') }
movie()

const car = function(){ console.log('Opala') }
car()
const truck = car
truck()

function price(){
    let total = 0
    for(let value of arguments)
        total += value
    return total
}
console.log(price(10, 20, 30, 40))

function carLoan(loan, rate=3, years=5){
    return loan*rate / 100*years
}
console.log(carLoan(20000))