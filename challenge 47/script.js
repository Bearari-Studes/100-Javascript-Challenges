function ehPerfeito(numero) {
    let somaDivisores = 0
    for(let i = 1; i < numero; i++) {
        if(numero % i === 0) somaDivisores += i
    }
    return somaDivisores === numero
}

console.log(ehPerfeito(6))
console.log(ehPerfeito(28))
console.log(ehPerfeito(12))