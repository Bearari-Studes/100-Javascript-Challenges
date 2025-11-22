// escreva uma funcao que conte as vogais de uma string

function contarVogais(str) {
  let contadorDeVogais = 0;
  const vogais = 'aeiouAEIOU';

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contadorDeVogais++;
    }
  }
  return contadorDeVogais;
}

console.log(contarVogais("batata"));