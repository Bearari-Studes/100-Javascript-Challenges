// Converta temperaturas entre Celsius e Fahrenheit.
// Fórmula: F = C × 9/5 + 32
// Exemplo: celsiusParaFahrenheit(25) → 77

function celsiusToFahrenheit(celsius) {
    const Fahrenheit = celsius* (9/5) + 32
    return Fahrenheit
}

console.log(celsiusToFahrenheit(25))