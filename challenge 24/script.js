// crie uma função que multiplique todos os valores de um array
// multiplicarArray([2, 3, 4])     // → 24 (2×3×4)

const myArray = [2, 3, 4]


function multiply(array) {
    let teste = array[0]
    for(let i = 1; i<=array.length-1; i++) {
        teste = teste*array[i]
    }
    return teste
}

console.log(multiply(myArray))