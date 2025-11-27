// Calcule o Índice de Massa Corporal baseado no peso (kg) e altura (m).
// Fórmula: IMC = peso / (altura × altura)
// Classificação:
// Abaixo de 18.5: Abaixo do peso
// 18.5-24.9: Peso normal
// 25-29.9: Sobrepeso
// 30+: Obesidade

function imcCalc(peso, altura) {
    let imc = peso / (altura*altura)
    if(imc <= 18.5) {
        return 'Abaixo do peso'
    } else if (imc <= 24.9) {
        return 'Peso normal'
    } else if (imc<=29.9){
        return 'Sobrepeso'
    } else {
        return 'Obesidade'
    }
}

console.log(imcCalc(70, 1.75))