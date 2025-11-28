function camelParaSnake(str) {
    return str.replace(/[A-Z]/g, letra => '_' + letra.toLowerCase())
}

console.log(camelParaSnake("camelCaseExample"))