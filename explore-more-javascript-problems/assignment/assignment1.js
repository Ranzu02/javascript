function cubeNumber(number) {
    console.log("You have entered a ",typeof(number));
    if(typeof(number) !== "number"){
        return "Please enter a valid number";
    }
    else {
        var cube = Math.pow(number, 3); 
        
    }
    // Using normal mathematics.
    // var cube = number * number * number;

    //Using the Math object 
    
    return cube; 
}

const givenNumber = "hello";
const cubeOfGivenNumber = cubeNumber(givenNumber);
console.log(cubeOfGivenNumber);