function maiorPalavra(frase) {
    const palavras = frase.split(' ')
    return palavras.reduce((maior, atual) => atual.length > maior.length ? atual : maior, "")
}

console.log(maiorPalavra("JavaScript é uma linguagem de programação"))