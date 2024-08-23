function formatSplit(value){
    if(value == 1)
        return value + ' person'
    else
        return value + ' people'
}

function update(){
    
    let bill = parseFloat(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    let tipValue = bill * (tipPercent/100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    let tipEach = tipValue / split

    console.log(billEach)
    //console.log({bill, tipPercent, split})

    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('tipEachValue').innerHTML = '$' + tipEach.toFixed(2)
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = '$' + tipValue.toFixed(2)
    document.getElementById('totalWithTip').innerHTML = '$' + billTotal.toFixed(2)
    document.getElementById('billEach').innerHTML = '$' + billEach.toFixed(2)
}

