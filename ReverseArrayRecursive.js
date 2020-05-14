// function reverse(array){
//   if(array.length === 1) return array[0]
//   return [(reverse(array.slice(1)))].concat(array[0])
// }

// console.log(reverse([1, 2, 3, 4]))

// let x = [1]


function test(num){
    if (num.length === 0) return 
    
    test(num.slice(1))

    console.log(num[0])
}

console.log(1 + console.log(2 + console.log(3 + console.log(4))))

// test([1, 2, 3, 4])