function meuMap(array, callback) {
    const resultado = []
    for(let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i], i, array))
    }
    return resultado
}

console.log(meuMap([1,2,3], x => x * 2))