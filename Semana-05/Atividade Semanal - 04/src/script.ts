console.log(`Exercício 1`)
//Exercício 1
interface Person {
    name: string
    lastName: string
    age: number
    isOlderThanEighteen?: boolean
    favoriteFoods: string[]
}

class PersonClass implements Person {
    public fullName: string

    constructor(
        public name: string,
        public lastName: string,
        public age: number, 
        public favoriteFoods: string[],
        public isOlderThanEighteen?: boolean ) {
            this.fullName = this.setFullName()
        }

        setFullName(): string{
           const fullName = `${this.name.trim()} ${this.lastName.trim()}`
           return fullName
        }

        showUserData() {
            console.log(`Olá, ${this.fullName}! você tem ${this.age} anos e suas comidinhas favoritas são: ${this.favoriteFoods}!`)
        }

        legalAge() {
            if(this.age >= 18) { this.isOlderThanEighteen = true }
            else this.isOlderThanEighteen = false

            return console.log(this.isOlderThanEighteen)
        }
}
let human1 = new PersonClass("Jão  ", "Palo", 20, ["Banana", "Manga", "Maçã", "Tomate"])
let human2 = new PersonClass("Mainha", "daRossa", 15, ["Peixe", "Abacate"])
human1.showUserData()
human1.legalAge()
human2.showUserData()
human2.legalAge()

//Exercício 2 -----------------------------------------------------------------------------------------------
console.log(`\n\nExercício 2`)
const sum = (...x:number[]) => {
    let soma: number = 0
    for(let i=0; i<x.length; i++) { soma += x[i] }
    return soma
}
console.log(sum(1, 3, 55, 22, 12349))
console.log(sum(5, 7, 22))
console.log(sum(6, 3))

//Exercício 3 -----------------------------------------------------------------------------------------------
console.log(`\n\nExercício 3`)
const array: (number | string)[] = ['xx', 2, 4, 55, "ff"]

function invertArray(array: (number | string)[]): (number | string)[] {
    return array.slice().reverse()
}
let newArray = invertArray(array)
console.log(newArray)
console.log(array)


//Exercício 4 -----------------------------------------------------------------------------------------------
console.log(`\n\nExercício 4`)

const n1: number = 66
const nArray: number[] = [2, 3, 4, 5, 6, 7]
function numOrArraySquared(n: number | number[]): number  | number[]{
    if(Array.isArray(n)) {
        for(let i=0; i<n.length; i++) { n[i]**=2 }
        return n
    }
    return n**2
}
console.log(numOrArraySquared(n1))
console.log(numOrArraySquared(nArray))