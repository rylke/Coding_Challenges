
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let arraySize = A.length
//     if(arraySize < 1) return null
//     let coinsToFlip = 0
//     for (let index = 0; index < arraySize - 1; index++){
//         if (A[index] === A[index+1]) coinsToFlip++
//     }
//     if(A.slice(0, Math.floor(arraySize / 2)) !== A.slice(Math.floor(arraySize / 2)).reverse()) return Math.floor(arraySize / 2)
//     return coinsToFlip
// }

// console.log(solution([1, 0, 1, 0, 1, 0]))
// console.log(solution([1, 1, 0, 1, 1]))
// console.log(solution([0, 1, 1, 0]))


function solution(S, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let letterArray = [...S]
    let indexToCost = {}
    for (let index = 0; index < letterArray.length; index++){
        if(letterArray[index] === letterArray[index+1]){
            let j = index
            while(letterArray[j] === letterArray[j+1]){
                indexToCost[j] = C[j]
                indexToCost[j+1] = C[j+1]
                j+=1
            }
        }
    }
    return [...Object.values(indexToCost)].reduce((acc, element) => acc+element, 0) - Math.max(...Object.values(indexToCost))
}
console.log(solution('aabbcc', [1, 2, 1, 2, 1, 2]))
