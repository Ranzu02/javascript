function isEven(number){
    const reminder = number % 2;
    if (reminder == 0){
        return true;
    }
    else {
        return false;
    }
}

const result = isEven(15);
console.log(result);