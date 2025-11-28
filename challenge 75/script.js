function diferencaSimetrica(array1, array2) {
    const diff1 = array1.filter(x => !array2.includes(x))
    const diff2 = array2.filter(x => !array1.includes(x))
    return [...diff1, ...diff2]
}

console.log(diferencaSimetrica([1,2,3], [2,3,4]))