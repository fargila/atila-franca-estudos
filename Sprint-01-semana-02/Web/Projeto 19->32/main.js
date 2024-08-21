//Projeto 19
let _randomNumber = Math.floor(Math.random() * 100)
let _tries = 0
console.log(_randomNumber)

function _checkGuess(){
    let _guess = document.getElementById('guess').value
    let _message = document.getElementById('message1')
    _tries++

    if(_guess == _randomNumber){
        _message.innerHTML = 'Congratulations, you guessed the number in ' + _tries +' tries!'
    }
    else if(_guess < _randomNumber){
        _message.innerHTML = 'Too low. Try again!'
    }
    else{
        _message.innerHTML = 'Too high. Try again!'
    }
}

//--------------------------------------------------------
//Projeto 21
let _checkButton = document.getElementById('check-button')
let _ageInput = document.getElementById('age-input')

_checkButton.addEventListener('click', function(){
    let _age = _ageInput.value
    let _message = (_age >= 18) ? 'You are an adult.' : 'You are not an adult!'
    alert(_message)
    _ageInput.value = ''
})

//--------------------------------------------------------
//Projeto 22
let _userNum1 = document.getElementById('userNum1')
let _userNum2 = document.getElementById('userNum2')
let _operator = document.getElementById('operator')
let _calculateButton = document.getElementById('calculate')
let _resultDiv = document.getElementById('result')

_calculateButton.addEventListener('click', function() {
    let _num1 = Number(userNum1.value)
    let _num2 = Number(userNum2.value)
    let _op = operator.value
    let _result

    switch (_op){
        case '+':
            _result = _num1 + _num2
            break
        case '-':
            _result = _num1 - _num2
            break
        case '*':
            _result = _num1 * _num2
            break
        case '/':
            _result = _num1 / _num2
            break
        default:
            _result = 'Invalid Operator!'
    }
    _resultDiv.innerHTML = 'The result is ' + _result

});

//--------------------------------------------------------
//Projeto 23
let _startInput0 = document.getElementById('start0');
let _endInput0 = document.getElementById('end0');
let _outputDiv0 = document.getElementById('output0');

function _showEvenNumbers() {
    let _start = Number(_startInput.value);
    let _end = Number(_endInput.value);

    let _i = _start;
    let _output = 0;

    while(_i <= _end){
        if(_i%2==0){
            _output += _i + ' '
            _outputDiv0.innerHTML = _output
        }
        _i++
    }
}

//--------------------------------------------------------
//Projeto 24
let _startInput1 = document.getElementById('start1');
let _endInput1 = document.getElementById('end1');
let _outputDiv1 = document.getElementById('output1');

function _showOddNumbers() {
    let _start = Number(_startInput1.value);
    let _end = Number(_endInput1.value);

    let _i = _start;
    let _output = 0;

    do{
        if(_i%2!=0){
            _output += _i + ' '
            _outputDiv1.innerHTML = _output
        }
        _i++
    }
    while(_i <= _end)
}

//--------------------------------------------------------
//Projeto 25
let _num1Input = document.getElementById("num1");
let _num2Input = document.getElementById("num2");
let _outputDiv = document.getElementById("output2");

function _showHigherNumber() {
    let _num1 = Number(_num1Input.value);
    let _num2 = Number(_num2Input.value);

    let _higherNumber = (_num1 > _num2) ? _num1 : _num2;

    _outputDiv.innerHTML = 'The higher number is ' + _higherNumber
}

//--------------------------------------------------------
//Projeto 26
let numberInput = document.getElementById("numberInput");
let checkButton = document.getElementById("checkButton");
let outputDiv = document.getElementById("output");

checkButton.addEventListener("click", function() {
    let number = Number(numberInput.value);

    if (number > 1 && number <= 10) {
        outputDiv.innerHTML = "Valid number!";
    } else if (number < 1) {
        outputDiv.innerHTML = "Number is too small!";
    } else if (number > 10) {
        outputDiv.innerHTML = "Number is too large!";
    } else {
        outputDiv.innerHTML = "Something went wrong!";
    }

    numberInput.value = ""
});

//--------------------------------------------------------
//Projeto 28
const _images = [
    "images/image0.png",
    "images/image1.png",
    "images/image2.png"
]
let _imageElement = document.getElementById('image')
let _buttonElement = document.getElementById('button')
let _index = 0

_buttonElement.addEventListener('click', function(){
    _index++
    if(_index == _images.length){
        _index = 0
    }
    _imageElement.src = _images[_index]
})

