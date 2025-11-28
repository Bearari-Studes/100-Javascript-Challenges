function meuReduce(array, callback, valorInicial) {
    let acumulador = valorInicial !== undefined ? valorInicial : array[0]
    let inicio = valorInicial !== undefined ? 0 : 1
    
    for(let i = inicio; i < array.length; i++) {
        acumulador = callback(acumulador, array[i], i, array)
    }
    
    return acumulador
}

console.log(meuReduce([1,2,3,4], (acc, val) => acc + val, 0))