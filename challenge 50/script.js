function produtoEscalar(vetor1, vetor2) {
    if(vetor1.length !== vetor2.length) {
        throw new Error("Vetores devem ter o mesmo tamanho")
    }
    
    let produto = 0
    for(let i = 0; i < vetor1.length; i++) {
        produto += vetor1[i] * vetor2[i]
    }
    return produto
}

console.log(produtoEscalar([1,2,3], [4,5,6]))
console.log(produtoEscalar([2,4], [1,3]))