console.log(`\n\nExercício3`)
const array: (number | string)[] = ['xx', 2, 4, 55, "ff"]

function invertArray(array: (number | string)[]): (number | string)[] {
    return array.slice().reverse()
}
let newArray = invertArray(array)
console.log(newArray)
console.log(array)
