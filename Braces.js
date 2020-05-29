
function validateBrakets(inputStr) {
    const closingBrackets = [')', '}', ']'];
    const openingBrackets = ['(', '{', '['];
    let openingBracketsStack = [];
    for (const bracket of inputStr) {
        if (openingBrackets.includes(bracket)) {
            openingBracketsStack.push(bracket)
        } else {
            let bracketToCheck = openingBracketsStack.pop();
            if (openingBrackets.indexOf(bracketToCheck) !== closingBrackets.indexOf(bracket)) return false
        }
    }
    return openingBracketsStack.length === 0;
}

console.log(validateBrakets("[{}]"))
console.log(validateBrakets("[{]"))