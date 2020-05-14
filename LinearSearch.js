function linearSearch(arr, value){
  for(let index = 0; index < arr.length; index++){
        if (arr[index] === value) {
            return index;
        }
    }
    return -1;
}