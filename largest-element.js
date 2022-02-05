function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest
}

let ages = [99, 73, 124, 63, 64, 76, 98];
let larg = largestElement(ages);
console.log(larg);