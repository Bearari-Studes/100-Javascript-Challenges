function achatarArray(array, profundidade = Infinity) {
    const resultado = []
    
    function achatador(arr, prof) {
        for(const elemento of arr) {
            if(Array.isArray(elemento) && prof > 0) {
                achatador(elemento, prof - 1)
            } else {
                resultado.push(elemento)
            }
        }
    }
    
    achatador(array, profundidade)
    return resultado
}

console.log(achatarArray([1,[2,[3,[4]],5]]))