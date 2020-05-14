function selectionSort(arr){
   let size = arr.length - 1
   for(let i = 0; i < size; i++){
       let minValueIndex = i
       for (let j = i+1; j < size; j++){
           if(arr[minValueIndex] > arr[j]){
               minValueIndex = j
           }
       }
       swap(arr, minValueIndex, i)
   }
   return arr
}

function swap(arr, num1, num2){
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
}

console.log(selectionSort([4, 9, 5, 2, 15, 87]))
