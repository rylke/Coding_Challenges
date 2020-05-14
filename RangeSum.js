function range(num){
    if(num === 0) return num
    return [num].concat(range(num-1))
}

console.log(range(3))