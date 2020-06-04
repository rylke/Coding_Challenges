
function sumAllPrimes(num) {
    let sum = 0
    for(let index = 2; index <= num; index++){
        if(isPrime(index)){
            sum += index
        }
    }
    return sum
}

function isPrime(num){
    let prime = true
    for(let index = 2; index < num; index++){
        if(num % index === 0){
            prime = false 
        }
    }
    return prime
}

console.log(sumAllPrimes(10))