function getFactorial(number) {
    var factorial = 1;
    for( var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var myNumber = 4;
var finalFactorial = getFactorial(myNumber);
console.log(finalFactorial);