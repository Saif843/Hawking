let myList = []
const LIMIT = 13

for (let i = 0; i < LIMIT; i++) {
    myList[i] = Math.round(Math.random() * 100)
    console.log(`Items at number ${i + 1} is ${myList[i]}`)
}

let sum = 0
let numberOfItems = myList.length

// while (myList.length > 0) {
//     sum += myList.shift()

// }

// let average = Math.round(sum / numberOfItems)

// console.log("Average is: ", average)


//------------------------------------------------------------------------------

//GPT:
//reduce vs shift



// while (myList.length > 0) {
//     sum = myList.reduce((acc, curr) => acc + curr)
// }

sum = myList.reduce(sumed)
let average = (sum / numberOfItems)
// let precisedAverage = average.toPrecision(2)
let precisedAverage = average.toFixed(2)

console.log("Average is: ", precisedAverage)

function sumed(prev, next) {
    return prev + next
}


console.log("Our Orignal List is also preserved by using reduce instead of shift: ", myList)
