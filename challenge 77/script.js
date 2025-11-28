function ehNumeroFeliz(numero) {
    const vistos = new Set()
    
    while(numero !== 1 && !vistos.has(numero)) {
        vistos.add(numero)
        numero = numero.toString().split('').reduce((acc, digito) => acc + Math.pow(parseInt(digito), 2), 0)
    }
    
    return numero === 1
}

console.log(ehNumeroFeliz(19))