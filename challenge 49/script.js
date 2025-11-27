function somaMatrizes(matriz1, matriz2) {
    return [
        [matriz1[0][0] + matriz2[0][0], matriz1[0][1] + matriz2[0][1]],
        [matriz1[1][0] + matriz2[1][0], matriz1[1][1] + matriz2[1][1]]
    ]
}

console.log(somaMatrizes([[1,2],[3,4]], [[5,6],[7,8]]))