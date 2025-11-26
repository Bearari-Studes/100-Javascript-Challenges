// some os valores de um array

function somarArray(array) {
    let soma = 0
    for(let i = 0; i <= array.length-1; i++) {
        soma += array[i]
    }
    return soma
}

const baseArray = [1,4,5,10]
console.log(somarArray(baseArray))