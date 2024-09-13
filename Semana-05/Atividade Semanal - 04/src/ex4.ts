console.log(`\n\nExercício4`)

const n1: number = 66
const nArray: number[] = [2, 3, 4, 5, 6, 7]
function numOrArraySquared(n: number | number[]): number  | number[]{
    if(Array.isArray(n)) {
        for(let i=0; i<n.length; i++) { n[i]**=2 }
        return n
    }
    return n**2
}
console.log(numOrArraySquared(n1))
console.log(numOrArraySquared(nArray))