function mediaPonderada(valores, pesos) {
    const somaPonderada = valores.reduce((acc, val, i) => acc + val * pesos[i], 0)
    const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0)
    return somaPonderada / somaPesos
}

console.log(mediaPonderada([10,8,9], [3,2,4]))