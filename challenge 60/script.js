function gerarCartaoCredito() {
    let cartao = ""
    for(let i = 0; i < 16; i++) {
        if(i > 0 && i % 4 === 0) cartao += " "
        cartao += Math.floor(Math.random() * 10)
    }
    return cartao
}

console.log(gerarCartaoCredito())