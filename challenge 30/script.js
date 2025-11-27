// Crie uma função que retorne se um ano é bissexto ou não seguindo as seguintes regras
// ehBissexto(2024)  // → true (divisível por 4)
// ehBissexto(1900)  // → false (divisível por 100 mas não por 400)
// ehBissexto(2000)  // → true (divisível por 400)

function ehBissexto(ano) {
  if (ano % 400 === 0) {
    return true;
  }
  if (ano % 100 === 0) {
    return false;
  }
  if (ano % 4 === 0) {
    return true;
  }
  return false;
}

console.log(ehBissexto(1900))