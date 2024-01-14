function add(number1, number2){
    if(typeof(number1) !== "number" || typeof(number2) !== "number"){
        return "Please enter numbers" ;
    }

    else {

        return number1 + number2;
    }
    
}

const total = add(12, 24);
console.log(total);