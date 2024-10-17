// let list = [43, 64, 7, 25, 7, 434, 8, 47, 28, 56]
let list = []

function averageOfList(list) {
    let sum = 0

    if (list.length === 0) {
        return "Bad Mistake"
    }
    for (let i = 0; i < list.length; i++) {
        sum += list[i]

    }
    // return Math.floor((sum / list.length))
    return sum / list.length
}

console.log("Average of the list is: " + averageOfList(list))