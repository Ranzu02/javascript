// 1. Inch to feet

function feetToInch(feet){
    let inch = 0;
    inch = feet * 12;
    return inch;
}
const givenFeet = 2;
const inchConverted = feetToInch(givenFeet);
console.log("The given feet", givenFeet, "will be:", inchConverted, "Inch");