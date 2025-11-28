function ehArmstrong(numero) {
    const digitos = numero.toString().split('')
    const potencia = digitos.length
    const soma = digitos.reduce((acc, digito) => acc + Math.pow(parseInt(digito), potencia), 0)
    return soma === numero
}

console.log(ehArmstrong(153))