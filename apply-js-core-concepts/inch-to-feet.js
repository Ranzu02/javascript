const myInches = 12;
const myFeet = myInches/12;
console.log(myFeet);

const dadaInch = 88;
const dadaFeet = dadaInch/12;
console.log('Dada Feet', dadaFeet);

function inchToFeet(inches) {
    var feet = inches/12;
    return feet;
}

var newFeet = inchToFeet(60);
console.log(newFeet);