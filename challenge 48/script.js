function arrayDePares(array) {
    return array.map((valor, indice) => [valor, indice])
}

console.log(arrayDePares(['a','b','c']))
console.log(arrayDePares([10,20,30]))