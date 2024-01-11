const friends = [14, 25, 65, 48, 46, 28, 64, 35, 95, 17, 93, 92, 91];

// const partial = friends.splice(2, 7);
// console.log(partial);

// Splice will remove items and return them. It will will also remvoe those array from the original array.
// Also, this can add some array items to the original array.

// Remove and add some new array itemas

const partial2 = friends.splice(2, 5, 85, 777, 9999, 3333);
console.log(partial2);
console.log(friends);