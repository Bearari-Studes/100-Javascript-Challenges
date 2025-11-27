function jurosCompostos(principal, taxa, tempo) {
    return principal * Math.pow(1 + taxa, tempo)
}

console.log(jurosCompostos(1000, 0.05, 2))