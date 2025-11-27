function jurosSimples(principal, taxa, tempo) {
    return principal * taxa * tempo
}

console.log(jurosSimples(1000, 0.05, 2))