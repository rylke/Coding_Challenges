let binarySearchRecursive = function(array, target, min = 0, max = array.length - 1) {
    
    if (max < min) return -1;

    let middle = Math.floor((max - min) / 2 + min);

    if (array[middle] === target)
        return middle;
    else if (array[middle] < target)
        return binarySearchRecursive(array, target, middle + 1, max);
    else
        return binarySearchRecursive(array, target, min, middle - 1);
};

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 5))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 6))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], -2))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 8))