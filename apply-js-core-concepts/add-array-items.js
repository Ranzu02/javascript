function addArray(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

let myNumbers = [35, 53, 24, 74, 34, 64, 73];
addArray(myNumbers);