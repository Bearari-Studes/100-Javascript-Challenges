function trocarVariaveis(a, b) {
    [a, b] = [b, a]
    return [a, b]
}

console.log(trocarVariaveis(5, 10))