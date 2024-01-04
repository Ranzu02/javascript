/**
 * You are given any array. 
 * var fruits = ["Apple", "Banana", "Orange"];
 * a) Find the index of Banana and replace Banana with Mango
 * b) Remove "Oragne" and add "Watermelone".
 */

var fruits = ["Apple", "Banana", "Orange"];
var indexOfBanana = fruits.indexOf("Banana");

console.log("The index of Banana is:", indexOfBanana);

fruits[1] = "Mango";

console.log("The Banana has been replaced with Mango by using Index", fruits);

fruits.pop("Orange");
console.log("After Removing Orange", fruits);
fruits.push("Watermelone");
console.log("After adding Watermelone", fruits);

/**
 * 
 */