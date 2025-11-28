function alarmeTemporizador(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Alarme! Tempo esgotado.")
        }, segundos * 1000)
    })
}

alarmeTemporizador(3).then(console.log)