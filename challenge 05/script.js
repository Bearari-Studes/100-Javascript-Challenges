//escreva uma funcao que retorne uma string ao contrario sem usar arrays

function reverse(str) {
    str = str.split('').reverse().join('')
    console.log(str)
}

reverse("Anotaram a data da maratona")