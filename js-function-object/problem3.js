/* 
3. Write a function called make_avg() which will take an array of integers
and find the size of that array and return the average of thoose values.
*/

function make_avg() {
    var numbers = [17, 43, 64, 98, 13, 75, 84, 49, 56];
    var sizeOfArray = numbers.length;
    console.log("The size of the array is:", sizeOfArray);
    var sum = 0;

    for (var i = 0; i < sizeOfArray; i++) {
        sum = sum + numbers[i];
    }

    var average = sum/sizeOfArray;
    return average;
}

var finalAverage = make_avg();
console.log(finalAverage);