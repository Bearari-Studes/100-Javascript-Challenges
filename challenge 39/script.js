function temperaturasExtremas(temperaturas) {
    let min = temperaturas[0]
    let max = temperaturas[0]
    for (let i = 1; i < temperaturas.length; i++) {
        if (temperaturas[i] < min) min = temperaturas[i]
        if (temperaturas[i] > max) max = temperaturas[i]
    }
    return { min, max }
}

console.log(temperaturasExtremas([22, 18, 25, 20]))