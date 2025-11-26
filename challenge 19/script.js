// descobrir se um numero é primo ou não
let numeroDigitado = 16;
let divisor = 2;
while(numeroDigitado%divisor != 0)
    divisor++;

if(numeroDigitado == divisor)
    console.log("Número Primo!");
else
    console.log("Número não primo!");