function oddNum(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}


function evenNum(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

let myNum = oddNum(123);
console.log('is my number odd', myNum);

let yourNum = evenNum(4763);
console.log('your number is even', yourNum);