//Ex.01
console.log('a')
console.log("a")
console.log(`a`)


//-----------------------------------------------------------------
//Ex.02
console.log(1)
console.log(1.1)
console.log(1+1)


//-----------------------------------------------------------------
//Ex.03
console.log(1>2)
console.log(1<=2)
console.log(1!=2)


//-----------------------------------------------------------------
//Ex.04
console.log(false && false)
console.log(false || false)
console.log(!false)


//-----------------------------------------------------------------
//Ex.05
console.log(false ? -Infinity : NaN)


//-----------------------------------------------------------------
//Ex.06
let word = 'Calado Cara'
const pi = 3.14
var realOuFake = true


//-----------------------------------------------------------------
//Ex.07
let idad = 20
if(idad > 18) console.log('Pode entrar')
else console.log("Sai daqui nanico!")


//-----------------------------------------------------------------
//Ex.08
const nome = 'Átila'
if(nome === 'Átila') 
    console.log('Bom dia, flor do dia! Seu nome é '+nome)
else console.log('Sei quem é tu nã menó')


//-----------------------------------------------------------------
//Ex.09
console.log(Math.pow(2, 2))
console.log(Math.pow(3, 2))
console.log(Math.pow(18, 2))


//-----------------------------------------------------------------
//Ex.10
let vel = 102
if(vel > 80) console.log('Divagá meu bixin')
else console.log('iiihh, mó careta!')


//-----------------------------------------------------------------
//Ex.11
idadMo = 17
hasCNH = false
if(idadMo>=18 && hasCNH) console.log('!CNH')
else if(idadMo>=18 && !hasCNH) console.log('Tudo certo')
else console.log('Sai daqui cara!')


//-----------------------------------------------------------------
//Ex.12
let x = 0
while (x <= 10){
    console.log(x++)
}


//-----------------------------------------------------------------
//Ex.13
for(let y=100; y>=50; y--){
    console.log(y)
}


//-----------------------------------------------------------------
//Ex.14
for(let q=0; q<=50; q++){
    if(q%2==0)
        console.log(`O número ${q} é par`)
    else
        console.log(`O número ${q} é ímpar`)
}


//-----------------------------------------------------------------
//Ex.15
let num = 17
if(num%2!=0 && num%3!=0 && num%5!=0 && num>1) 
    console.log(`O número ${num} é primo.`)
else console.log(`O número ${num} não é primo.`)


//-----------------------------------------------------------------
//Ex.16
const imprima = () => console.log("Hello World!")
imprima()


//-----------------------------------------------------------------
//Ex.17
const recebeIdad = (idad) => console.log(`Você têm ${idad} anos`)
recebeIdad(17)
recebeIdad(55)


//-----------------------------------------------------------------
//Ex.18
const doisNum = (n, m) => { return n + m }
console.log(doisNum(1, 1))


//-----------------------------------------------------------------
//Ex.19
function numAle(max){
    return console.log(Math.floor((Math.random() * max)+1))
}
numAle(99)


//-----------------------------------------------------------------
//Ex.20
const entrarAuto = (e) => {
    if(e >= 18)
        console.log("Pode entrar na auto escola.")
    else
        console.log("Sai daqui, minininho.")
}

entrarAuto(17)
entrarAuto(18)


//-----------------------------------------------------------------
//Ex.21
const verifica = (e) => {
    if(typeof e === 'number') 
        return console.log("Isso aí é um número.")
    else if(typeof e === 'boolean') 
        return console.log("Isso aí é um valor boolean.")
    else if(typeof e === 'string') 
        return console.log("Isso aí é uma String")
    else 
       return console.log("Sei que é isso aí nãn")
}
verifica(11)
verifica('11')
verifica(false)
verifica(verifica)


//-----------------------------------------------------------------
//Ex.22
const passarPositivo = (e) => console.log(Math.abs(e))
passarPositivo(-88)


//-----------------------------------------------------------------
//Ex.23
const countString = (e) =>{
    if(e.length > 10)
        console.log("Texto muito longo.")
    else
        console.log("Texto dentro do limite.")
}
countString("Átila França do Nascimento")
countString("Oi")


//-----------------------------------------------------------------
//Ex.24
const exponente = (b, p) =>{
    return console.log(b**p)
} 
exponente(7, 3)


//-----------------------------------------------------------------
//Ex.25
const recursao = (e) =>{
    if(e%2==0)
        console.log(e)
    if(e != 0)
        recursao(e-1)
}
recursao(71)

//falha
let array = [1, 5, 88, 6]
const calculateAverage = (e) => {
    let media = 0

    for(let a=0; a <= a.length; a++){
        media += e[a]
    }
    media /= e.length
    
    console.log(e.length)
    return media
}
console.log(calculateAverage(array))


//-----------------------------------------------------------------
//Ex.26
array = [0,1,2,3,4]
console.log(array[0], array[2], array[3])


//-----------------------------------------------------------------
//Ex.27
arrayA = [0, 1]
arrayB = [0, 1, 2, 4]
console.log(arrayA.length, arrayB.length)


//-----------------------------------------------------------------
//Ex.28&29
const onibus = {
    rodas: 8,
    limPassageiros: 40,
    portas: 2
}
console.log(onibus)
onibus.janelas = 20
delete onibus.rodas
console.log(onibus)
console.log(onibus.janelas)


//-----------------------------------------------------------------
//Ex.30
arrayC = ["Jão", "Garibldo", "Zé", "Dudu", "Átila"]

if(arrayC.includes('Átila'))
    console.log("Seu nome está no array.")
else
console.log("Não sei quem é você.")


//-----------------------------------------------------------------
//Ex.31
arrayD = [0, 1, 2, 3, 4]
arrayE = [false, false, false]

const has5 = (e) => {

    if(e.length >= 5)
        console.log("Muitos elementos")
    else
        console.log("Poucos elementos")
}
has5(arrayD)
has5(arrayE)


//-----------------------------------------------------------------
//Ex.32
arrayF = [0, 1, 2, 3, 4, 5]
for(let a=0; a<arrayF.length; a++){
    console.log(arrayF[a])
}
console.log("\npausa\n")


//-----------------------------------------------------------------
//Ex.33
const json = {
    "cabeca": 1,
    "ombro": 2,
    "joelho&pe": 4
}
console.log(json.cabeca)
console.log(json.ombro)
console.log(json["joelho&pe"])


//-----------------------------------------------------------------
//Ex.34
const frase = "Por que tudo é tão triste..."
const arrayG = frase.split(" ")

for(let b=0; b<arrayG.length; b++){
    console.log(arrayG[b])
}


//-----------------------------------------------------------------
//Ex.35
const obj = {
    somar(x, y){
        console.log(`A soma é: ${x+y}`)
    },
    subtrair(x, y){
        console.log(`A subtração é: ${x-y}`)
    },
    multiplicar(x, y){
        console.log(`O produto é: ${x*y}`)
    },
    dividir(x, y){
        console.log(`A divisão é: ${x/y}`)
    }
}

obj.dividir(5,2)
obj.multiplicar(5,2)
obj.somar(5,2)
obj.subtrair(5,2)
console.log("\npausa\n")


//-----------------------------------------------------------------
//Ex.36
class contaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
    }
    saque(valor){
        this.saldo -= valor
    }
}
let conta = new contaBancaria(2000)
conta.deposito(1000)
conta.saque(300)
console.log(conta.saldo)


//-----------------------------------------------------------------
//Ex.37
class Carrinho{
    constructor(itens=[], qtdTotal=0, valorTotal=0){
        this.itens = itens
        this.qtdTotal = qtdTotal
        this.valorTotal = valorTotal
    }

    addItens(item, qtd, valor){
        this.qtdTotal += qtd
        this.valorTotal += valor
        this.itens.push({item, qtd, valor})
    }
    remItens(item){
        const index = this.itens.findIndex(i => i.item === item)

        if(index != -1){
            const removedItem = this.itens.splice(index, 1)[0]
            this.qtdTotal -= removedItem.qtd
            this.valorTotal -= removedItem.valor
        }
        else
            console.log("O item que você quer remover não está " 
        + "no seu carinho!")
    }
}

let compra = new Carrinho([], 0, 0)
compra.addItens("Jogo", 2, 75);
compra.addItens("Pipus", 5, 40);

console.log(compra.itens);
console.log(compra.qtdTotal);
console.log(compra.valorTotal);

compra.remItens("Jogo");
console.log(compra.itens);
console.log(compra.qtdTotal);
console.log(compra.valorTotal);


//-----------------------------------------------------------------
//Ex.38
const endereco = {
    rua: "Av. São João Norueguês",
    bairro: "Macarinas",
    cidade: "Camarões",
    estado: "Bahia",
    get(){
        return `A rua é ${this.rua}, o bairro é ${this.bairro},
         a cidade é ${this.cidade} e o estado é ${this.estado}`
    },
    set(rua, bairro, cidade, estado){
        this.bairro = bairro
        this.rua = rua
        this.cidade = cidade
        this.estado = estado
    }
}
console.log(endereco.get())


//-----------------------------------------------------------------
//Ex.39
class Carro {
    constructor(marca, cor, gas){
        this.marca = marca
        this.cor = cor
        this.gas = gas
    }
    //10km - 1L
    dirigir(km){
        this.gas -= km/10
    }
    abastecer(qtdGas){
        this.gas += qtdGas
    }
}
let newCar = new Carro("Fusca", "Azul", 6)

//-----------------------------------------------------------------
//Ex.40
class ContaBanco {
    constructor(saldoContaCorrente, saldoContaPoupanca,
                jurosPoupanca){
        this.saldoContaCorrente = saldoContaCorrente
        this.saldoContaPoupanca = saldoContaPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    deposito(money){
        this.saldoContaPoupanca += money
    }
    saque(money){
        this.saldoContaPoupanca -= money
    }
    tranfer(money){
        this.saldoContaPoupanca -= money
        this.saldoContaCorrente += money
    }
    juros(){
        let juros = (this.saldoContaPoupanca*this.juros) / 100
        this.saldoContaPoupanca += juros
    }
}
// ContaBanco.prototype.doubleDaMoney = function(){
//     this.jurosPoupanca *= 2
// }

class ContaEspecial extends ContaBanco{
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
        super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca*2);
        
    }
}

let cliente = new ContaBanco(1000, 2000, 1.3)
let cliente1 = new ContaEspecial(1000, 2000, 1.3)

//Falho
class ContaBancaria {
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta
        this.saldo = saldo
    }
    
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor
        }
        else
            console.log("Sai daqui, seu pobre!")
    }
    consultarSaldo(){
        console.log(`O saldo atual da conta é R$${this.saldo.toFixed(2)}`)
    }
    
}

conta = new ContaBancaria("123-4", 10000)
conta.depositar(1500)
conta.sacar(500)
class Livro {
    constructor(titulo, autor, disponivel){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }
    
    emprestar(){
        if(this.disponivel){
            !this.disponivel
        }
        else
            console.log("O livro não está disponível")
    }
    devolver(){
        if(!this.disponivel){
            this.disponivel
        }
        else
            console.log("O livro já está presente conosco")
    }
    consultarDisponibilidade(){
        return console.log(this.disponivel)
    }
}

let livro1 = new Livro("Amar é estranho", "Cornélius", true)
livro1.consultarDisponibilidade()


//-----------------------------------------------------------------
//Ex.41
/*
\d = Qualquer dígito de caractere
\w = Um caractere alfanumérico
\s = Qualquer caractere de espaço em branco
\D = Caracteres que não são dígitos
\W = Caractere não alfanumérico
\S = Caractere que não seja espaço em branco
.  = Qualquer caractere, menos nova linha  
*/

console.log(`\nPAUSA\n`)
const regex1 = /^[A-Z]+$/
console.log(regex1.test("SSSFFWQ q"))
console.log(regex1.test("S"))
console.log(regex1.test("SSSFFWQ"))
console.log(regex1.test("q"))


//-----------------------------------------------------------------
//Ex.42
console.log(`\nPAUSA\n`)
const regex2 = /.+ID$/
console.log(regex2.test("SSSFFWQ ID"))
console.log(regex2.test("SSSFFWQgID"))
console.log(regex2.test("iD"))
console.log(regex2.test("ididid"))
console.log(regex2.test("asfId"))


//-----------------------------------------------------------------
//Ex.43
console.log(`\nPAUSA\n`)
const regex3 = /Marca: \w+/
console.log(regex3.test("Marca: ddd"))
console.log(regex3.test("marca: dd"))
console.log(regex3.test("marca   w"))
console.log(regex3.test("MARCA:  w"))
console.log(regex3.test("Marca:  "))


//-----------------------------------------------------------------
//Ex.44
console.log(`\nPAUSA\n`)
const regex4 = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/
console.log(regex4.test("122.4.5.1"))
console.log(regex4.test("0.0.0.0"))
console.log(regex4.test("999.999.99.9"))


//-----------------------------------------------------------------
//Ex.45
console.log(`\nPAUSA\n`)
//Errado
// const regex5 = /([a-z]\_\-\[0-9]{3}){16}/
// const regex5 = /([a-z_-][0-9]{3}){16}/
//Certo
const regex5 = /^(?=.{3,16}$)[a-z_-][0-9]/
