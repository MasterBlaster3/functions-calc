// A quarter of the animals on a farm have four legs. 
// The remaining three quarters of the animals have two legs. 
// If there are 60 legs overall, how many animals are there on the farm?

// X - number of cows with 4 legs
// (24 - X) - number of chicken with 2 legs
// 4X +2(24-X) = 60
// 2X = 12
// X = 6 cows
// 24 - 6 = 18 chickens

const subtract = (numberOne, numberTwo) => {
    const difference = numberOne - numberTwo

    return difference
}
const multiply = (numberOne, numberTwo) => {
    const product = numberOne * numberTwo

    return product
}
const divide = (numberOne, numberTwo) => {
    const quotient = numberOne / numberTwo

    return quotient
}
const square = (originalNumber) => {
    const squared = originalNumber * originalNumber

    return squared
}

let result = square(6)
console.log(result)