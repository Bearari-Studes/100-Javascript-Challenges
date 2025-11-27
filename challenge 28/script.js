// jogo par ou impar

function game(decision, num) {
    let res;
    let computerNum = Math.floor(Math.random() * 5) + 1
    let numAdd = computerNum+num
    if (numAdd%2==0) {
        res = 'par'
    } else {
        res = 'impar'
    }
    if (res == decision) {
        console.log("Ganhou")
    } else {
        console.log("Perdeu")
    }
}

game('par', 3)