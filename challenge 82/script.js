function centralizarTexto(texto, largura) {
    const espacos = largura - texto.length
    if(espacos <= 0) return texto
    
    const espacosEsquerda = Math.floor(espacos / 2)
    const espacosDireita = espacos - espacosEsquerda
    
    return ' '.repeat(espacosEsquerda) + texto + ' '.repeat(espacosDireita)
}

console.log(centralizarTexto("JavaScript", 20))