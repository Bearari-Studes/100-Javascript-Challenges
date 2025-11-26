//crie uma função que conte quantas vezes um elemento aparece em um array
// Exemplo: contarOcorrencias([1, 2, 3, 2, 1], 2) → 2

function ocorrencias(array, num) {
    times = 0
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == num) {
            times++
        }
    }
    return times
}

console.log(ocorrencias([1, 2, 3, 2, 1], 2))