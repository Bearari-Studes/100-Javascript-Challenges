function jogoAdivinhacao(max = 100) {
    const numeroSecreto = Math.floor(Math.random() * max) + 1
    let tentativas = 0
    
    return function adivinhar(palpite) {
        tentativas++
        
        if(palpite === numeroSecreto) {
            return `Parabéns! Você acertou em ${tentativas} tentativas.`
        } else if(palpite < numeroSecreto) {
            return "Muito baixo! Tente novamente."
        } else {
            return "Muito alto! Tente novamente."
        }
    }
}

const adivinhar = jogoAdivinhacao(50)
console.log(adivinhar(25))