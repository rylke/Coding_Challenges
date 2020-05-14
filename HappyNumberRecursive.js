function happyNumber(num){
    if (num === 1) return 1
    return happyNumber(String(num).split("").map(item => Number(item)**2).reduce((acc, item) => acc + item, 0))
}

happyNumber(30)