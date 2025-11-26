//Implemente o algoritmo de Euclides para calcular MDC (Máximo Divisor Comum)
// Exemplo: mdc(48, 18) → 6
function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    }
    return calcularMDC(b, a % b);
}


const num1 = 48;
const num2 = 18;
const mdc = calcularMDC(num1, num2);
console.log(`O MDC de ${num1} e ${num2} é: ${mdc}`);