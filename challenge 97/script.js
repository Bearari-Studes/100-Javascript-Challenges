function validarSenha(senha) {
    const temMinimo8 = senha.length >= 8
    const temMaiuscula = /[A-Z]/.test(senha)
    const temMinuscula = /[a-z]/.test(senha)
    const temNumero = /\d/.test(senha)
    
    return temMinimo8 && temMaiuscula && temMinuscula && temNumero
}

console.log(validarSenha("Senha123"))