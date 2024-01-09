// Finding the smallest number in an array.

function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i]; // I have a doubt here why can we use const here???
        if (element < smallest) {
            smallest = element;
        }

    }
    return smallest;
}

const height = [125, 68, 89, 155, 147, 123];
const finalSmallest = smallestNumber(height);
console.log(finalSmallest);


