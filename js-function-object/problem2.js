/* 
Write a function called make_avg() which will take an three integers and return
the average to thoose values.
*/

function make_avg() {
    var num1 = 15;
    var num2 = 30;
    var num3 = 40;
    var average = (num1 + num2 + num3) / 3;
    return average;
}

var averageReturn = make_avg();
averageReturn = averageReturn.toFixed(2);
averageReturn = parseFloat(averageReturn);
console.log(averageReturn);
