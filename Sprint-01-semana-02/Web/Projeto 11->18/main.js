//Projeto 14
// for(let _a=0; _a<42; _a++){
//     console.log(_a+1 +'. Hi')
// }

// let _colorList = []
// for(let _b=0; _b<=2; _b++){
//     _colorList[_b] = prompt("Digite a cor " + parseInt(_b+1) + ':')
// }
// alert('Sua lista de cores ficou assim:' + _colorList)

// document.getElementById('proj15').innerHTML = _colorList

//--------------------------------------------------------
//Projeto 15
let _myList = ['Camarão', 'Lagosta', 'Carangueijo', 'Aranha', 'Octomofo']
let _numberList = document.getElementById('numberList')

for(let _c=0; _c<5; _c++){
    let _listItem = document.createElement('li')
    _listItem.appendChild(document.createTextNode(_myList[_c]))
    // _listItem.textContent = 'Item ' + _c
    _numberList.appendChild(_listItem)
}

//--------------------------------------------------------
//Projeto 16
function _gretting(name){
    console.log('hi...(awkward) ' + name)
}
function _sum(n1, n2){
    return n1 + n2
}
let _res = _sum(7, 99)
console.log(_res)
_gretting('Jão')

function _changeColor(){
    let titleH2 = document.getElementById('changeh2')
    titleH2.style.color = 'red'
}

//--------------------------------------------------------
//Projeto 17
let _d = 5.2
let _listD = [5, 14, 56, 2, -23]
console.log(Math.round(_d))
console.log(Math.ceil(_d))
console.log(Math.floor(_d))
console.log(Math.max(_listD))
console.log(Math.min(_listD))
console.log(Math.floor(Math.random()*100))

function _changeColor2(){
    let _colors = ['gray', 'pink', 'red', 'green', 'yellow', 'orange', 'blue', 'violet']
    document.body.style.backgroundColor = _colors[Math.floor(Math.random()*_colors.length)]
}

//--------------------------------------------------------
//Projeto 18
