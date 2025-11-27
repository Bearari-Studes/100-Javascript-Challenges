// crie uma função que en contre a media de valores em um array
// Fórmula: média = soma / quantidade


function media(array) {
    let soma = 0
    for(let i = 0; i <= array.length-1; i++) {
        soma += array[i]
    }
    let media = soma/array.length
    return media
}

const baseArray = [5,10,15,20]
console.log(media(baseArray))