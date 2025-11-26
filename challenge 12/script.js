// crie uma função que gere a tabuada de um numero de 1 ate 10
// Exemplo: tabuada(7) deve exibir: 7×1=7, 7×2=14, ..., 7×10=70

function tabuada(num) {
    for(let i = 0; i<=10;i++) {
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

tabuada(4)