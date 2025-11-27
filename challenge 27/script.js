// crie uma função que conte quantos numeros tem em uma variavel sendo positivo ou negativo

let myNumbers = -432
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
function count(num) {
    let countNum = 0
    num = num.toString().split('')
    
    for(let i = 0; i<=num.length;i++) {
        if(numbers.includes(num[i])) {
            countNum++
        }
    }
    return countNum
}

console.log(myNumbers)
console.log(myNumbers.toString().split(''))
console.log(count(myNumbers))
