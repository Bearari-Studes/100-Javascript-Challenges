function piramide(n) {
    const piramide = []
    for(let i = 1; i <= n; i++) {
        const espacos = ' '.repeat(n - i)
        const asteriscos = '*'.repeat(2 * i - 1)
        piramide.push(espacos + asteriscos + espacos)
    }
    return piramide
}

console.log(piramide(5))