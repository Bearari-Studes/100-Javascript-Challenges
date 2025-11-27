function paraMaiusculas(str) {
    let resultado = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char >= 'a' && char <= 'z') {
            resultado += String.fromCharCode(char.charCodeAt(0) - 32)
        } else {
            resultado += char
        }
    }
    return resultado
}

function paraMinusculas(str) {
    let resultado = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char >= 'A' && char <= 'Z') {
            resultado += String.fromCharCode(char.charCodeAt(0) + 32)
        } else {
            resultado += char
        }
    }
    return resultado
}

console.log(paraMaiusculas("hello"))
console.log(paraMinusculas("WORLD"))