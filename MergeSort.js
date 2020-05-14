function merge(arrOne, arrTwo){
    let result = []
    let lengthOfArrayOne = 0 
    let lengthOfArrayTwo = 0

    while(lengthOfArrayOne < arrOne.length && lengthOfArrayTwo < arrTwo.length){
        if (arrOne[lengthOfArrayOne] > arrTwo[lengthOfArrayTwo]){
            result.push(arrTwo[lengthOfArrayTwo])
            lengthOfArrayTwo++
        }else{
            result.push(arrOne[lengthOfArrayOne])
            lengthOfArrayOne++
        }
    }
    while(lengthOfArrayOne < arrOne.length){
        result.push(arrOne[lengthOfArrayOne])
        lengthOfArrayOne++
    }
    while(lengthOfArrayTwo < arrTwo.length){
        result.push(arrTwo[lengthOfArrayTwo])
        lengthOfArrayTwo++
    }
    return result
}

function mergeSort(arr){
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

mergeSort([1, 10, 50, 2, 14, 99, 100, 200])

