// crie uma função que conte quantas consoantes tem em uma string

const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', ' k', 'l', ' m', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
soma = 0
function contar(str) {
    str.split('')
    for (let i = 0; i <= str.length; i++) {
        if (consoantes.includes(str[i])) {
            soma++
        }
    }
    return soma
}

console.log(contar("javascript"))