let number1 = Math.floor((Math.random() * 100) + 1)
let number2 = Math.floor((Math.random() * 100) + 1)
let number3 = Math.floor((Math.random() * 100) + 1)

let maximum = number1

if (number2 > maximum) {
    console.log("Maximum Number is Number 2: ", number2)
    maximum = number2

} else if (number3 > maximum) {
    console.log("Maximum Number is Number 3: ", number3)
    maximum = number3
} else {
    console.log("Maximum Number is Number 1: ", number1)

}

if (maximum == number1) {
    console.log("Number 1 is the maximum number")
    if (number2 > number3) {
        console.log("Second highest Number is Number 2: ", number2)
        console.log("Third highest Number is Number 3: ", number3)
    } else {
        console.log("Second highest Number is Number 3: ", number3)
        console.log("Third highest Number is Number 2: ", number2)
    }
} else if (maximum == number2) {
    console.log("Number 2 is the maximum number")
    if (number1 > number3) {
        console.log("Second highest Number is Number 1: ", number1)
        console.log("Third highest Number is Number 3: ", number3)
    } else {
        console.log("Second highest Number is Number 3: ", number3)
        console.log("Third highest Number is Number 1: ", number1)
    }
} else {
    console.log("Number 3 is the maximum number")
    if (number1 > number2) {
        console.log("Second highest Number is Number 1: ", number1)
        console.log("Third highest Number is Number 2: ", number2)
    } else {
        console.log("Second highest Number is Number 2 ", number2)
        console.log("Third highest Number is Number 1", number1)
    }
}



//  Feedback from GPT:
// let number1 = Math.floor((Math.random() * 100) + 1);
// let number2 = Math.floor((Math.random() * 100) + 1);
// let number3 = Math.floor((Math.random() * 100) + 1);

// let maximum = number1;

// if (number2 > maximum) {
//     maximum = number2;
// }

// if (number3 > maximum) {
//     maximum = number3;
// }

// console.log("Maximum Number is: ", maximum);


//-------------------------------------------------------

// if (maximum == number1) {
//     console.log("Number 1 is the maximum number");
//     if (number2 > number3) {
//         console.log("Second highest number is Number 2: ", number2);
//         console.log("Third highest number is Number 3: ", number3);
//     } else {
//         console.log("Second highest number is Number 3: ", number3);
//         console.log("Third highest number is Number 2: ", number2);
//     }
// } else if (maximum == number2) {
//     console.log("Number 2 is the maximum number");
//     if (number1 > number3) {
//         console.log("Second highest number is Number 1: ", number1);
//         console.log("Third highest number is Number 3: ", number3);
//     } else {
//         console.log("Second highest number is Number 3: ", number3);
//         console.log("Third highest number is Number 1: ", number1);
//     }
// } else if (maximum == number3) {
//     console.log("Number 3 is the maximum number");
//     if (number1 > number2) {
//         console.log("Second highest number is Number 1: ", number1);
//         console.log("Third highest number is Number 2: ", number2);
//     } else {
//         console.log("Second highest number is Number 2: ", number2);
//         console.log("Third highest number is Number 1: ", number1);
//     }
// }







