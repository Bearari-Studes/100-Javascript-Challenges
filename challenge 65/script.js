function buscaBinaria(array, alvo) {
    let esquerda = 0
    let direita = array.length - 1
    
    while(esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2)
        
        if(array[meio] === alvo) return meio
        else if(array[meio] < alvo) esquerda = meio + 1
        else direita = meio - 1
    }
    
    return -1
}

console.log(buscaBinaria([1,3,5,7,9,11], 7))