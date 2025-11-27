// Crie uma função que gere senhas aleatorias incluindo leras maiusculas e minusculas, numeros e caracteres especiais

const maiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const simbolos = ['!', '@', '#', '$', '%', '^', '&', '*']


function ultimateBlasterPasswordGenerator() {
    let password = ''

    for (let i = 1; i <= 2; i++) {

        let maiusculaRandom = maiusculas[Math.floor(Math.random() * maiusculas.length)]
        password += maiusculaRandom

        let minusculaRandom = minusculas[Math.floor(Math.random() * minusculas.length)]
        password += minusculaRandom

        let numeroRandom = numeros[Math.floor(Math.random() * numeros.length)]
        password += numeroRandom

        let simboloRandom = simbolos[Math.floor(Math.random() * simbolos.length)]
        password += simboloRandom
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('')

    return password

}



console.log(ultimateBlasterPasswordGenerator())