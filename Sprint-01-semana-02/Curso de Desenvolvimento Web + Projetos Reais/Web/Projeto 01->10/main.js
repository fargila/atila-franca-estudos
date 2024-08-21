//Projeto-01&02
let _fullName = "<<Átila França do Nascimento>>"
let _russianIntroduction = "Ya zavut "
let _legalAge = 22


console.log(_russianIntroduction + _fullName)
console.log("i u menya " + _legalAge + " let")

//--------------------------------------------------------
//Projeto-03
// let _firstName = prompt("Digite o seu primeiro nome: ")
// let _secondName = prompt("Digite o seu sobrenome nome: ")
// let _age = parseInt(prompt("Digite a sua idade: "))
// const _importantNumber = 4

// console.log(_firstName)
// console.log(_secondName)
// console.log((_age+2)+_importantNumber)

//--------------------------------------------------------
//Projeto-05
// let _fName2 = prompt("Digite o seu primeiro nome: ")
// let _grettings = "Boa vida,"
// document.getElementById('gretting').innerHTML = _grettings +" "+ _fName2

//--------------------------------------------------------
//Projeto-06
let _friends = ['Maicon Küster', 'Neymar Jr', 'Flávio Kotaka', 'Jão']

_friends[1] = 'Pewdiepie'
_friends[5] = 'Julius do Todo Mundo Odeia o Chris'
console.log(_friends)

//--------------------------------------------------------
//Projeto-07
let _celsius = 0
let _fahrenheit = 0
_celsius = parseFloat(prompt('Digite a temperatura em Celsius: '))
_fahrenheit = _celsius*1.8 + 32
alert('A temperatura em Fahrenheit: ' + _fahrenheit.toFixed(2))

//--------------------------------------------------------
//Projeto-08
let = _yearsLived = 20

if(_yearsLived >= 18){
    console.log('Você é um adulto...Eu acho, não faço ideia')
}
else if(_yearsLived >= 15){
    console.log('Silly-aah teenager')
}
else{
    console.log('!(invertalo)No eres viejo!')
}

//--------------------------------------------------------
//Projeto-08
// let _grade = prompt('Digite a nota do aluno: ')

// if (_grade >= 90 && _grade <= 100) {
//     alert('Aluno nota A.');
// } else if (_grade >= 80 && _grade < 90) {
//     alert('Aluno nota B.');
// } else if (_grade >= 70 && _grade < 80) {
//     alert('Aluno nota C.');
// } else if (_grade >= 60 && _grade < 70) {
//     alert('Aluno nota D.');
// } else if (_grade >= 0 && _grade < 60) {
//     alert('Aluno nota F.');
// } else {
//     alert('Nota inválida!');
// }

//--------------------------------------------------------
//Projeto-09
let a = 10
let b = 5
let c =2
let _op0 = a == b
let _op1 = a != b
let _op2 = a >= b
let _op3 = a > b && a > c
let _op4 = a > b || a > c

console.log(_op0)
console.log(_op1)
console.log(_op2)
console.log(_op3)
console.log(_op4)

//--------------------------------------------------------
//Projeto-09
// let _letGoda = prompt('Digite sua idade: ')
// let _hasTitulo = prompt('Tem título de eleitor? (sim/não)')
// let _idadeMin = 18

// if(idade >= _idadeMin && _hasTitulo == 'sim') {
//     console.log('Você pode votar :^)')
// }
// else if(idade >= _idadeMin && _hasTitulo == 'não') {
//     console.log('Você pode votar(ilegalmente) >:^(')
// }
// else if(idade < _idadeMin) {
//     console.log('Você não tem a idade mínima para votar :^(')
// }

//--------------------------------------------------------
//Projeto-10
let _valorConta = parseFloat(prompt("Digite o valor da conta: "))
let _gorjeta = parseFloat(prompt("Digita a gorjeta (decimal)%: "))
_gorjeta *= _valorConta/100
let _total = _valorConta + _gorjeta

console.log('O valor total com gorjeta é de RS$'+ _total.toFixed(2))

