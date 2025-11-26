// crie uma função de uma calculaddora bem simples
// Exemplo: calculadora(10, 5, '+') → 15

function calculadora(num1, num2, operator) {
    switch(operator){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1/num2
    }
}

console.log(calculadora(2,3,'+'))