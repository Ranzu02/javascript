/**
 * 1.  You are given 3 numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
 * 
 * 2. You are given a triangle with the sides 9,8,9. Write a program to check whether the triangel is isosceles or not using if-else.
 * isoscelese => two sides are equal. 
 */

var num1 = 13;
var num2 = 79;
var num3 = 105;

if (num1 > num2 && num1 > num2) {
    console.log("The largest number is:", num1);
}

else if (num2 > num1 && num2 > num3) {
    console.log("The larget number is:", num2);
}

else {
    console.log("The larget number is:", num3);
}

var side1 = 7;
var side2 = 8;
var side3 = 7;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("The triangle is isosceles");
}

else {
    console.log("The triangle is not isosceles");
}