function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    let j = i - 1
    while (j >= 0 && items[j] > value) {
      items[j + 1] = items[j]
      j--;
    }
    items[j + 1] = value
  }
  return items
}


console.log(insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]))