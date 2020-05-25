//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n){
    let result = permute(n)
    console.log(result)
    let index = result.indexOf(n)
    return result[index+1]
}

function digitList(num){
  let result = []
  while(num > 0){
    let currentNum = num % 10
    result.unshift(currentNum)
    num = Math.floor(num / 10)
  }
  return result
}

function concatNums(array){
  let size = array.length - 1
  let sum = 0;
  let mul = 1
  for(let index = size; index >= 0; index--){
      sum += mul * array[index]
      mul *= 10
  }
  return sum
}

function permute(num) {
    let result = [];
    let digitArray = digitList(num)
    if (digitArray.length == 1) return digitArray;
    if (digitArray.length == 2) return [concatNums(digitArray), concatNums(digitArray.reverse())];
    digitArray.forEach((element, idx, arr) => {
      var sub = [].concat(arr);
      sub.splice(idx, 1);
      permute(concatNums(sub)).forEach(perm => {
        result.push(parseInt(`${element}`+perm))
      });
    });
    return [... new Set(result)].sort();
  }

console.log(nextBigger(2017))