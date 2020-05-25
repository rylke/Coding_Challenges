
let swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

function removeZeros(array) {
  for(let i = 0; i < array.length; i++){
        for (let j = i + 1; j + 1 < array.length; j++){
            if(typeof array[i] === "string" && array[i].split(".").length > 1 ){
                continue
            }else if(parseInt(array[i], 10) === 0  && array[j] !== 0){
                swap(array, i, j)
            }
        }
    }
    return array
}

console.log(removeZeros([7, 2, 3, "0", 4, 6, 0, "0", 13, 0, 78, 0, 0]))