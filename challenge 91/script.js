function inverterPalavras(frase) {
    return frase.split(' ').map(palavra => palavra.split('').reverse().join('')).join(' ')
}

console.log(inverterPalavras("Hello World"))