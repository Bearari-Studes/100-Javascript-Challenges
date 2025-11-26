// crie uma função que encontre o menor numero em um array
const nums = [0, 4, 2, 8, 2, 7, 5, 1]

function findMax(array) {
  var maximumNumber = 0
  for (let i = 0; i <= array.length; i++) {
    if (array[i] >= maximumNumber) {
      maximumNumber = array[i]

    }
  }
  return maximumNumber
}

console.log(findMax(nums))
