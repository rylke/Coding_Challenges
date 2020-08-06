
const isUpperCase = (character) => /^[A-Z]*$/.test(character)
const isLowerCase = (character) => /^[a-z]*$/.test(character)

function solve(s){
    let lowerCount = 0
    let upperCount = 0
    s.split("").forEach(letter => {
        if(isLowerCase(letter)) lowerCount++
        if(isUpperCase(letter)) upperCount++
    });
    if(lowerCount >= upperCount) return s.toLowerCase()
    return s.toUpperCase()
}

console.log(solve("CODe"))
console.log(solve("Code"))