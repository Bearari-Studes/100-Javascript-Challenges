function embaralhar(array) {
    const embaralhado = [...array]
    
    for(let i = embaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [embaralhado[i], embaralhado[j]] = [embaralhado[j], embaralhado[i]]
    }
    
    return embaralhado
}

console.log(embaralhar([1,2,3,4,5]))