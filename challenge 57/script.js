function calcularIdade(dataNascimento) {
    const nascimento = new Date(dataNascimento)
    const hoje = new Date()
    
    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mesAtual = hoje.getMonth()
    const mesNascimento = nascimento.getMonth()
    
    if(mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--
    }
    
    return idade
}

console.log(calcularIdade("1990-05-15"))