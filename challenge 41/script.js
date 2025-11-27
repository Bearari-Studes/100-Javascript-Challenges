function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

console.log(validarEmail("user@example.com"))
console.log(validarEmail("invalid.email"))
console.log(validarEmail("name@domain.co.uk"))