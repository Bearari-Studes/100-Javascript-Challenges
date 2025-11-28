function comprimirString(str) {
    if(str.length === 0) return ""
    
    let resultado = ""
    let count = 1
    let atual = str[0]
    
    for(let i = 1; i < str.length; i++) {
        if(str[i] === atual) {
            count++
        } else {
            resultado += atual + (count > 1 ? count : "")
            atual = str[i]
            count = 1
        }
    }
    
    resultado += atual + (count > 1 ? count : "")
    return resultado
}

console.log(comprimirString("aaabbbcccaaa"))