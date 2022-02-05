function factorial(num) {
    fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}


let yourNumber = factorial(9);
console.log('9 factorial number is ', yourNumber);

let myNum = factorial(12);
console.log('12 factorial nimber is ', myNum);