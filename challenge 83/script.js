function degrausEscada(n) {
    const degraus = []
    for(let i = 1; i <= n; i++) {
        degraus.push('#'.repeat(i).padStart(n, ' '))
    }
    return degraus
}

console.log(degrausEscada(5))