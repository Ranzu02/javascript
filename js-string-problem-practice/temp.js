let first = 5;
let second = 7;
console.log(first, second);

// Swapping variable using temp
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Swaping variable using destruction

[first, second] = [second, first];

console.log(first, second);