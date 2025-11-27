// Crie uma função que implemente o cálculo de raiz quadrada usando o método babilônio (ou de Herão), que usa aproximações sucessivas.

// Algoritmo:
// Comece com uma estimativa (ex: n/2)
// Calcule nova estimativa: (estimativa + n/estimativa) / 2
// Repita até a precisão desejada

// Exemplo:
// raizQuadrada(16)    // → 4
// raizQuadrada(25)    // → 5
// raizQuadrada(2)     // → 1.4142 (aproximadamente)

function raizQuadrada(n, precisao = 0.0001) {
    if (n < 0) {
        throw new Error("Não é possível calcular raiz quadrada de número negativo");
    }
    let estimativa = n / 2 || 1;
    while (Math.abs(estimativa * estimativa - n) > precisao) {
        estimativa = (estimativa + n / estimativa) / 2;
    }
    return estimativa;
}

console.log(raizQuadrada(16));
console.log(raizQuadrada(25));
console.log(raizQuadrada(2));
console.log(raizQuadrada(0.5));
