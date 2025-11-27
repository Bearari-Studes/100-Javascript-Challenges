function diferenca(array1, array2) {
    return array1.filter(elemento => !array2.includes(elemento))
}

console.log(diferenca([1,2,3,4], [2,4,6]))
console.log(diferenca(['a','b','c'], ['b']))