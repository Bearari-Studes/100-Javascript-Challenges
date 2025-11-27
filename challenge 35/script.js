function buscar(array, elemento) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === elemento) {
            return i;
        }
    }
    return -1;
}

console.log(buscar([1,2,3,4,5], 2))