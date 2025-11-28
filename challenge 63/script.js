function torreHanoi(n, origem, destino, auxiliar, movimentos = []) {
    if(n === 1) {
        movimentos.push(`Mover disco 1 de ${origem} para ${destino}`)
        return movimentos
    }
    
    torreHanoi(n - 1, origem, auxiliar, destino, movimentos)
    movimentos.push(`Mover disco ${n} de ${origem} para ${destino}`)
    torreHanoi(n - 1, auxiliar, destino, origem, movimentos)
    
    return movimentos
}

console.log(torreHanoi(3, 'A', 'C', 'B'))