function capitalizeFirst (array) {
  if (array.length === 1) {
    return [capitalize(array[0])];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(capitalize(array.slice(array.length-1)[0]));
  return res;
}

function capitalize(word){
    let listOfLetters = [...word]
    let result = listOfLetters[0].toUpperCase()
    listOfLetters[0] = result
    return listOfLetters.join("")
}

capitalizeWords(['car','taco','banana']);