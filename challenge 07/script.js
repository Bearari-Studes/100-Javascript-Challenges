function palindromo(str) {
    if(typeof str != 'string'){
        console.log('digite um texto')
    } else {
        str = str.toLocaleLowerCase()
        reverseStr = str.split('').reverse().join('')
        console.log(str)
        console.log(reverseStr)
        if(str === reverseStr) {
            console.log('eh palindromo')
        } else {
            console.log('nao eh palindromo')
        }
    }
}

palindromo('Arara')