function snakeParaCamel(str) {
    return str.replace(/_([a-z])/g, (_, letra) => letra.toUpperCase())
}

console.log(snakeParaCamel("snake_case_example"))