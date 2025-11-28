function decimalParaBinario(decimal) {
    return (decimal >>> 0).toString(2)
}

console.log(decimalParaBinario(10))