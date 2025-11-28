function bubbleSort(array) {
    const n = array.length
    let trocado
    
    do {
        trocado = false
        for(let i = 0; i < n - 1; i++) {
            if(array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                trocado = true
            }
        }
    } while(trocado)
    
    return array
}

console.log(bubbleSort([64,34,25,12,22,11,90]))