// Some os numeros individuais de um numero
// exemplo - somaDigitos(123)      // → 6 (1+2+3)

function somar(num) {
    count = 0
    num = num.toString().split('')
    for (let i = 0; i <= num.length-1; i++) {
        count += Number(num[i])
    }
    return count
}
console.log(somar(123))