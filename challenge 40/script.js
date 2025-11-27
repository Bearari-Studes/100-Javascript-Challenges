function moda(array) {
    const frequencia = {}
    let maxFreq = 0
    let modas = []
    
    for(let elemento of array) {
        frequencia[elemento] = (frequencia[elemento] || 0) + 1
        if(frequencia[elemento] > maxFreq) {
            maxFreq = frequencia[elemento]
        }
    }
    
    for(let elemento in frequencia) {
        if(frequencia[elemento] === maxFreq) {
            modas.push(isNaN(elemento) ? elemento : Number(elemento))
        }
    }
    
    return modas.length === 1 ? modas[0] : modas
}

console.log(moda([1,2,2,3,3,3,4]))
console.log(moda([1,1,2,2,3]))