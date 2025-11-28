function contarPalavras(frase) {
    return frase.trim().split(/\s+/).filter(palavra => palavra.length > 0).length
}

console.log(contarPalavras("JavaScript é uma linguagem de programação"))