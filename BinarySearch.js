function binarySearch(arr, value){
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    
    while(arr[mid] !== value && start <= end){
        if (value < arr[mid]) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2)
    }
    return (arr[mid] === value) ? mid : -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 6))
console.log(binarySearch([0, 1, 2, 3, 4, 5], 0))
console.log(binarySearch([0, 1, 2, 3, 4, 5], 5))