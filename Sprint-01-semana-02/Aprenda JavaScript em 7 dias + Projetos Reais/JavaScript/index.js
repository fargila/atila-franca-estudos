//Seção 2
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