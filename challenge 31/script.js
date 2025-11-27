function diaDaSemana(dataString) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
                 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date(dataString);
    return dias[data.getDay()+1];
}

console.log(diaDaSemana('2025-11-27'))