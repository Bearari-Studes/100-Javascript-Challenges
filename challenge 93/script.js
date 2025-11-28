function criarSlug(texto) {
    return texto
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

console.log(criarSlug("Hello World! How are you?"))