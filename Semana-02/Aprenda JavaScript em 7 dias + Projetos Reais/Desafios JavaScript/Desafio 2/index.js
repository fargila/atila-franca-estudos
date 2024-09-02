let value = parseFloat(prompt('Enter the product value: '))
console.log(typeof value)

if(value >= 20)
    document.getElementById('result').innerHTML = 'Approved'
else
    document.getElementById('result').innerHTML = 'Denied'