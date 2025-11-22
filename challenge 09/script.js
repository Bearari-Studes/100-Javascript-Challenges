//escreva uma funcao que conte os numero pares de um numero de 0 ate o numero
// Exemplo: numerosPares(5) → [0, 2, 4, 6, 8]

function contarPar(num) {
    let res = 0
    for(let i = 0; i<num+1; i=i+2) {
        res =+i
        console.log(res)
    }
}

contarPar(13)