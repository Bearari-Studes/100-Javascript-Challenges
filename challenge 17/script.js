// remova as duplicatas de um array

baseArray = [9,1,2,2,4,3,3,3,4,3,4,2,1,3,2,2,3,4,5,6,7,8,5,7,2,1,2,3,2,9]
const arrayUnico = [...new Set(baseArray)];

console.log(arrayUnico)