// Multi arrays: grids in games and storing numerical data for scientific computing

// let myArray = [
//     [32, 54, 775, 43, 88],
//     [76, 9, 2, 54, 99],
//     [12, 5, 6, 76, 9]
// ]


// console.log(myArray)

// // Bubble sort

// console.log("Bubble sort: ")
// // Scan array from left to right


// let results = []






// let myNewArray = [54, 2, 5, 7, 3, 32, 543, 89, 132, 547]

// const bubbleSort = (arr) => {
//     const len = arr.length
//     let temp = 0

//     for (let i = 0; i < len; i++) {
//         for (j = 0; j < len; j++) {
//             console.log("Operations: ", (j + 1))
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }



// }

// console.log(bubbleSort(myNewArray))



let simpleArray = [54, 75, 24, 786, 12, 657, 32, 768, 35, 41, 784]

console.log("Simple Array: ", simpleArray)




let bubbleSort = (arr) => {
    const len = arr.length
    let count = 0
    // let result = []

    function swap(arr, left, right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

    }


    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            count++
            if (arr[j] > arr[j + 1]) {
                // const temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
                swap(arr, j, j + 1)
            }

        }
    }
    return [arr, count]
}

let container = bubbleSort(simpleArray)
console.log("Bubble sort: ", container)



let jojo = [32, 6, 1, 76, 43, 96, 27, 83, 93]

console.log("Now working on selection sort: ")

const selectionSort = (arr) => {
    const len = arr.length

    for (let i = 0; i < len; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j
        }

        if (minIndex !== 0) {
            const temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }

        return arr
    }
}

console.log("Selected Sort Array: ", selectionSort(jojo))
