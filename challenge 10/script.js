//escreva uma funcao para encontrar o maior numero em um array sem utilizar Math.max()

const numeros = [1, 382, 3, 123, 44, 444];
let maiorNumero = -Infinity; 

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(maiorNumero);
