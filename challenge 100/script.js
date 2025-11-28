function conversorMoeda(valor, taxaCambio, moedaOrigem, moedaDestino) {
    const valorConvertido = valor * taxaCambio
    return `${valor} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`
}

console.log(conversorMoeda(100, 5.20, "USD", "BRL"))