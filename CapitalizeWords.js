function capitalizeWords (array) {
  if (array.length === 1) return array[0].toUpperCase();
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
}

console.log(capitalizeWords(['i', 'am', 'me']))