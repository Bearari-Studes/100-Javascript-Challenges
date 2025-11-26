//Ordenar Array (Bubble Sort)

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
}

let numeros = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];
bubbleSort(numeros);
console.log(numeros);
