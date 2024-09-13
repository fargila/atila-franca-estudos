console.log(`Exercício1`)
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