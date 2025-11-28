function zerosParaOFinal(array) {
    const semZeros = array.filter(x => x !== 0)
    const zeros = array.filter(x => x === 0)
    return [...semZeros, ...zeros]
}

console.log(zerosParaOFinal([0,1,0,3,12]))