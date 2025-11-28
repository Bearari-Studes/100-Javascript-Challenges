function meuFilter(array, callback) {
    const resultado = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(meuFilter([1,2,3,4,5], x => x % 2 === 0))