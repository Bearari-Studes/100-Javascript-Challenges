function diamante(n) {
    const diamante = []
    
    for(let i = 1; i <= n; i++) {
        const espacos = ' '.repeat(n - i)
        const asteriscos = '*'.repeat(2 * i - 1)
        diamante.push(espacos + asteriscos + espacos)
    }
    
    for(let i = n - 1; i >= 1; i--) {
        const espacos = ' '.repeat(n - i)
        const asteriscos = '*'.repeat(2 * i - 1)
        diamante.push(espacos + asteriscos + espacos)
    }
    
    return diamante
}

console.log(diamante(5))