function validarCartaoCredito(numero) {
    const numeros = numero.replace(/\s/g, '').split('').map(Number)
    let soma = 0
    let par = false
    
    for(let i = numeros.length - 1; i >= 0; i--) {
        let digito = numeros[i]
        
        if(par) {
            digito *= 2
            if(digito > 9) digito -= 9
        }
        
        soma += digito
        par = !par
    }
    
    return soma % 10 === 0
}

console.log(validarCartaoCredito("4532015112830366"))