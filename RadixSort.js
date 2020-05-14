
function getDigit(num, index){  
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10
}

function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getLongestDigitLength(arr){
    let max = 0;
    arr.forEach(num => {
        if (digitCount(num) > max) max = digitCount(num)
    })
    return max
}

function radixSort(arr){
    let longestDigitLength = getLongestDigitLength(arr)
    for(let index = 0; index < longestDigitLength; index++){
        let buckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < arr.length; i++){
            buckets[getDigit(arr[i], index)].push(arr[i])
        }
        arr = [].concat(...buckets)
    }
    return arr
}

console.log(radixSort([345, 56, 4324, 4, 43, 9874]))
