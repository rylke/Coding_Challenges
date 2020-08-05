class RomanNumerals {

    static getNumToRomanMap() {
        return {
            1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VI", 8: "VIII", 9: "IX", 10: "X",
            50: "L", 100: "C", 500: "D", 1000: "M"
        }
    }

    static toRoman(num) {
        let NUM_TO_ROMAN = this.getNumToRomanMap()
        let romanNum = ""
        for (let i = 0; i < this.digitCount(num); i++) {
            let currentValue = this.getDigit(num, i + 1)
            if (NUM_TO_ROMAN[currentValue]) romanNum += NUM_TO_ROMAN[currentValue]
            else {
                let numToCheck = 0;
                if (currentValue > 1000) romanNum += "M".repeat(this.getDigit(currentValue, 1) / 10 ** 3)
                else if (currentValue > 900 && currentValue < 1000) romanNum = romanNum + "CM"
                else if (currentValue > 500 && currentValue <= 800) {
                    numToCheck = this.getDigit(currentValue, 1) / 10 ** 2
                    romanNum += "D" + "C".repeat(numToCheck - 5) // because D is already 5 (50)
                } else if (currentValue > 100 && currentValue < 500) {
                    numToCheck = this.getDigit(currentValue, 1) / 10 ** 2
                    if (numToCheck > 3) romanNum += "CD"
                    else romanNum += "C".repeat(numToCheck)
                } else if (currentValue > 50 && currentValue < 100) {
                    numToCheck = this.getDigit(currentValue, 1) / 10
                    if (numToCheck > 3) romanNum += "XC"
                    else romanNum += "L" + "X".repeat(numToCheck)
                } else if (currentValue > 10 && currentValue < 50) {
                    numToCheck = this.getDigit(currentValue, 1) / 10
                    if (numToCheck > 3) romanNum += "XL"
                    else romanNum += "X".repeat(numToCheck)
                }
            }
        }
        return romanNum
    }

    static getDigit(num, index) {
        return Math.floor(Math.abs(num) / Math.pow(10, this.digitCount(num) - index)) % 10 * Math.pow(10, this.digitCount(num) - index)
    }

    static digitCount(num) {
        if (num === 0) return 1
        return Math.floor(Math.log10(Math.abs(num))) + 1
    }

}



console.log(RomanNumerals.toRoman(1795))


let numeralsArray = [
    { number: 1000, roman: 'M'}, //0
    { number: 900, roman: 'CM'}, //1
    { number: 500, roman: 'D'},  //2
    { number: 400, roman: 'CD'}, //3
    { number: 100, roman: 'C'},  //4
    { number: 90, roman: 'XC'},  //5
    { number: 50, roman: 'L'},   //6
    { number: 40, roman: 'XL'},  //7
    { number: 10, roman: 'X'},   //8
    { number: 9, roman: 'IX'},   //9
    { number: 5, roman: 'V'},    //10
    { number: 4, roman: 'IV'},   //11
    { number: 1, roman: 'I'}     //12
];

function convert( number ) {
    let romanLetter = '';
    for(let i=0; i < numeralsArray.length; i++) {
        if( numeralsArray[i].number <= number ) {
            number = number - numeralsArray[i].number; // 1
            romanLetter = romanLetter + numeralsArray[i].roman; // II
            i--;
        }
    console.log(romanLetter);
    }
}

convert( 5 );