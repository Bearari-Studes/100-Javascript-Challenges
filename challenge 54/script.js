function decimalParaRomano(numero) {
    const valores = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const romanos = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    
    let resultado = ""
    
    for(let i = 0; i < valores.length; i++) {
        while(numero >= valores[i]) {
            resultado += romanos[i]
            numero -= valores[i]
        }
    }
    
    return resultado
}

console.log(decimalParaRomano(1987))