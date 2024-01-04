/* 
Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do this in 4 waysL:
*Has return + Has parameter
*No return + Has parameter

*/

function odd_even(number){
    var modulas = number % 2;
    if (modulas == 1){
        console.log("This number is a odd number");
    }
    else {
        console.log("This number is a even number");
    }

}

odd_even(13);

// With returing a value/ Has Return

function odd_even(number){
    var modulas = number % 2;
    
    return modulas;
}

var function_value = odd_even(12);
if( function_value == 1){
    console.log("This number is a odd number")

}

else {
    console.log("This number is a even number");
}