function contarCaracteresSemEspacos(str) {
    return str.replace(/\s/g, '').length
}

console.log(contarCaracteresSemEspacos("Hello World"))