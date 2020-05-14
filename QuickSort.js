function getPivotIndex(arr, startIndex = 0, endIndex = arr.length) {
    let swapValues = (arr, index1, index2) => {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }
    let pivotPoint = arr[startIndex]
    let swapIndex = startIndex
    for (let index = startIndex + 1; index <= endIndex; index++) {
        if (pivotPoint > arr[index]) {
            swapIndex++
            swapValues(arr, swapIndex, index)
        }
    }
    swapValues(arr, swapIndex, startIndex)
    return swapIndex
}

function quickSort(arr, start = 0, end = arr.length) {
    if (start < end) {
        let pivotIndex = getPivotIndex(arr, start, end)
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr
}

console.log(quickSort([6, 4, 1, 39, 67, 32, 7, 5, 9]))