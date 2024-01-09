// Finding the largetst element of an array.

function maxInArray(numbers) {
let largest = numbers[0];
// console.log(largest);
for( var i = 0; i < numbers.length; i++){
   const element = numbers[i];
    
    if(element > largest){
        largest = element;
        
    }
}
console.log("Tallest person is:", largest);
}

const heights = [167, 190, 120, 165, 137, 250];
maxInArray(heights);


// Homework: Write a function to get the smallest number of an array.
