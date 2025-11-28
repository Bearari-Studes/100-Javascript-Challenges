function maiorSubarraySoma(array) {
    let maxAtual = array[0]
    let maxGlobal = array[0]
    
    for(let i = 1; i < array.length; i++) {
        maxAtual = Math.max(array[i], maxAtual + array[i])
        maxGlobal = Math.max(maxGlobal, maxAtual)
    }
    
    return maxGlobal
}

console.log(maiorSubarraySoma([-2,1,-3,4,-1,2,1,-5,4]))