console.log('Exercício 1')
interface Vehicle {
    make: string
    model: string
    year: number
}

const auto1: Vehicle = {
    make: 'daBoa',
    model: 'doBom',
    year: 2024
}

const aceitadorDeVeiculos = (vehicle: Vehicle) => {
    return console.log(`A marca desse veículo é: ${vehicle.make}, o modelo é ${vehicle.model} e foi feito no ano ${vehicle.year}.`)
}
aceitadorDeVeiculos(auto1)


console.log('\n\nExercício 2')
const array = [true, 2, 55, 'dd', 'alga']

function firstElement<T>(elements : T[]): void {
    if (elements.length === 0) { return console.log('Não há elementos nesse array') }
    else console.log('O primeiro elemento desse array é: ' + elements[0])
}
firstElement(array)


console.log('\n\nExercício 3')
type Product = {
    id: number
    name: string
    price: number
}
const p1: Product = { id:33, name:'Manga Cara', price:50.99 }

const freezeProduct  = (product: Product): Readonly<Product> => {
    return Object.freeze(product)
}
const frozenP1 = freezeProduct(p1)
console.log(frozenP1)

const updateProductPrice = (product: Product, newPrice: Partial<Product>) => {
    return { ...product, ...newPrice }
}
const updateP1 = updateProductPrice(p1, { price: p1.price*2 })
console.log(updateP1)


