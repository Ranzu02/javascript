// Problem1: Harrys mom gave him money and asked to buy some oranges and apples.
// Write a program to help Harry calculate how much money the shopkeeper will return.
// 
var momGave = 1000;
var orangeAppleCost = 700;
var shopKeeperReturns;

shopKeeperReturns = momGave - orangeAppleCost;

console.log(shopKeeperReturns);

// Problem 2: Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a
// student.
// Sample inputs: 75.25, 65, 80, 34.45, 99.50
// Output should be 71.04

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var total;
var average;
total = math + biology + chemistry + physics + bangla;
average = total/5;
average = average.toFixed(2);
average = parseFloat(average);
console.log(average);

// Problem 3: John's teacher gave him two variables. Each variable contains a string. John's teacher
// asked him to combine these two strings and print them in one AudioListener. Help
// John to write the program.
// Sample: String1: I am going to be String 2: an awesome web developer.

var firstString = "I am going to be";
var secondString = "an awesome developer";
var fullString;
fullString = firstString + " " + secondString;
console.log(fullString);

// Problem 4: Sarah's mother is teaching her mathematics. She gave Sarah a number and asked
// her what the remainder would be if she divided the number by 5. Help
// Sarah write the program.
// Sample input: 119
// Output:?

var givenNumber = 119;
var reminder;
reminder = givenNumber % 5;
console.log(reminder);

// Finding the types of variable

var number = 12;
console.log(typeof(number));