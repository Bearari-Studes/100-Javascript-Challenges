// crie uma função que retorne o valor absoluto de um numero
// absoluto(-5)    // → 5
// absoluto(3)     // → 3
// absoluto(0)     // → 0
// absoluto(-2.5)  // → 2.5

function absoluto(num) {
    if (num<0) {
        num = -num
    }
    return num
}

console.log(absoluto(-22))