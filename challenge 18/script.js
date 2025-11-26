//Fibonacci
// fibonacci(6) // → [0, 1, 1, 2, 3, 5]
// fibonacci(8) // → [0, 1, 1, 2, 3, 5, 8, 13]
function fibonacci(times) {
    let sequence = [0, 1]
    for (let i = 1; i <= times - 2; i++) {
        sequence.push(sequence[i - 1] + sequence[i])

    }
    return sequence
}

console.log(fibonacci(8))