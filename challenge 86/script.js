function desenharRelogio(hora, minuto) {
    const anguloHora = (hora % 12) * 30 + minuto * 0.5
    const anguloMinuto = minuto * 6
    
    return {
        hora: anguloHora,
        minuto: anguloMinuto
    }
}

console.log(desenharRelogio(3, 15))