// Storing multiple values in a single variable

// insetion and deltetion requires shifting the array

let data = [43, 66, 11, 88, 47, 94, 57]
let insertedData = 425
let position = 2


for (let i = 0; i <= data.length - 1; i++) {
    console.log(data[i], "at index: ", i)
}

console.log("Part-0: ")

for (let i = 0; i < data.length; i++) {
    console.log(data[i], " at index: ", i)
}

console.log("Part-1: ")


for (let i = data.length - 1; i >= 0; i--) {
    console.log(data[i])
    // if (i >= position) {
    //     data[i + 1] = data[i]
    //     if (i == position) {
    //         data[i] = insertedData
    //     }
    // }

    if (i > position) {
        data[i + 1] = data[i]
    }

    if (i == position) {
        data[i] = insertedData
    }

}

console.log("Shifted: ")
console.log(data)



// Deleting Elements of array
// We can remove last one directly but not middle one

console.log("Deleted Part: ")
let data1 = [43, 31, 77, 3, 77, 23, 75]
let position1 = 4

// for (let i = 0; i < data1.length; i++) {
//     console.log(data1[i])
// }

// for (let i = position; i < data1.length - 1; i++) {
//     data1[i] = data1[i + 1]
// }

for (let i = position1; i < data1.length - 1; i++) {
    data1[i] = data1[i + 1]
}
data1.length = data1.length - 1 // delete last element
console.log(data1)


//Minimum and Maximum in an array

let scores = [43, 67, 2, 7, 2, 88, 24, 88, 46, 86, 32, 765]

let max = scores[0]
let min = scores[0]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i]
    }
    if (scores[i] < min) {
        min = scores[i]
    }
}

console.log("Max is: ", max, " and Min is: ", min)


// function to reverse an array


let reverseingArray = [75, 3, 8, 26, 97, 38, 6847, 9]

// let i = reverseingArray[reverseingArray.length - 1]
// let j = reverseingArray[0]

// while (j > i) {
//     let temp = reverseingArray[j]
//     reverseingArray[j] = reverseingArray[i]
//     reverseingArray[i] = temp
//     j--
//     i++

// }

// console.log("Reversed Array: ", reverseingArray)

let i = 0, j = reverseingArray.length - 1

while (i < j) {
    let temp = reverseingArray[i]
    reverseingArray[i] = reverseingArray[j]
    reverseingArray[j] = temp
    i++
    j--
}

console.log("Reversed Array: ", reverseingArray)


//Finding sum
console.log("Finding Sum: ")
let sum = 0
let summingArray = [54, 75, 2, 97, 54, 97, 435, 87]

for (let i = 0; i < summingArray.length; i++) {
    sum += summingArray[i]
}

console.log("Sum is: ", sum)