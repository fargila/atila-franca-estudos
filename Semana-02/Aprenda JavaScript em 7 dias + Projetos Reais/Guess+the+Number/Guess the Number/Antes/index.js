let computerNumber
let userNumbers = []
let maxGuesses = 5

function newGame(){
    window.location.reload()
}

function init(){
    computerNumber = Math.floor(Math.random()*100 + 1)
}

let cont = 0
function compareNumbers(){
    
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    
    if(cont < maxGuesses)
    {
        if(userNumber > computerNumber)
            { 
                document.getElementById('textOutput').innerHTML = "Your number is too high"
                document.getElementById('inputBox').value = ''
                cont++
                document.getElementById('attempts').innerHTML = cont
            }
            else if(userNumber < computerNumber)
            { 
                document.getElementById('textOutput').innerHTML = "Your number is too low" 
                document.getElementById('inputBox').value = ''
                cont++
                document.getElementById('attempts').innerHTML = cont
            }
            else
            {
                document.getElementById('textOutput').innerHTML = "You are correct!" 
                cont++
                document.getElementById('attempts').innerHTML = cont
            }
    }
    else
    {
        document.getElementById('textOutput').innerHTML = "You lost! The number was: " + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    } 
}