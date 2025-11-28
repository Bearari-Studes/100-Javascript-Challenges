function simularDados(lancamentos, lados = 6) {
    const resultados = Array(lados).fill(0)
    
    for(let i = 0; i < lancamentos; i++) {
        const resultado = Math.floor(Math.random() * lados) + 1
        resultados[resultado - 1]++
    }
    
    return resultados.map((count, index) => ({
        face: index + 1,
        frequencia: count,
        porcentagem: ((count / lancamentos) * 100).toFixed(2) + '%'
    }))
}

console.log(simularDados(1000))