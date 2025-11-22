//escreva uma funcao que retorne o fatorial de um numero
// Exemplo: fatorial(5) → 120 (5 × 4 × 3 × 2 × 1)

function fatorial(num) {
    res1 = `${num}`
    res2 = 1
    num = `${num}`
    for(var i =num-1; i>0; i--) {
        res1 += ` x ${i}`    
    }
    
    for(var i = num; i>0; i--) {
        res2 *= i
    }

    console.log(res1)
    console.log(res2)
}

fatorial(12)