function rotacionarArray(array, posicoes) {
    const rotacao = posicoes % array.length
    if(rotacao === 0) return array
    
    return [...array.slice(-rotacao), ...array.slice(0, -rotacao)]
}

console.log(rotacionarArray([1,2,3,4,5], 2))