console.log(`\n\nExercício2`)
const sum = (...x:number[]) => {
    let soma: number = 0
    for(let i=0; i<x.length; i++) { soma += x[i] }
    return soma
}
console.log(sum(1, 3, 55, 22, 12349))
console.log(sum(5, 7, 22))
console.log(sum(6, 3))