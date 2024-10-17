let number1 = 54
let number2 = 90
let number3 = 12


function findingLargestNumber(number1, number2, number3) {
    let largestNumber = number1
    if (number2 > largestNumber) {
        largestNumber = number2
        return number2
    }
    if (number3 > largestNumber) {
        number3 = largestNumber

        return number3
    }
    return largestNumber

}

console.log("Largest Number is: " + findingLargestNumber(number1, number2, number3))