/* 
1. Display "Ajke amar mon valo nei" for 39 times.
2. Display numbers from 58 to 98. 
3. Show all even numbers from 412 to 456. 
4. Show all odd numbers from 581 to 621.
5. Difference between for and while loop.
6. Declare an array for all the topics you have learned last few days. Display them as output.
7. Create an array for all the mobile phones that you have used. Dispaly all the elemennts by using while loop. 
8. Run a loop from 30 to 86. This loop will stope if the values get higher than 44. 
9. Write the price of the books that you have. Display the prices if the price is less than 200. 

*/
// Answer to the Question number 1
var display = "Ajke amr mon valo nei";

for (var i = 0; i < 39; i++) {
    console.log(display);
}

// Answer to the Question number 2
var number = 58;

while (number <= 98) {
    console.log(number);
    number++;
}

// Answer to the Question number 3


for ( var i = 412; i <= 456; i +=2) {
    console.log(i);
}

// Answer to the Question number 4

for (var i = 581; i <=621; i += 2) {
    console.log("Odds are:", i);
}

// 5. Difference between for and while loop.

// There is no significant difference between for and while loop.

// Answer to the Question number 6

var learned = ["HTML", "CSS", "Tailwind", "DaisyUI", "JavaScript"];
var learnedLength = learned.length;

for (var i = 0; i < learnedLength; i++) {
    console.log(learned[i]);
}

// Answer to the Question number 7
// 7. Create an array for all the mobile phones that you have used. Dispaly all the elemennts by using while loop.

var mobilePhones = ['Nokia', 'iPhone', 'Motorolla', 'Mi'];
var i  = 0;
while (i < 4) {
    console.log(mobilePhones[i]);
    i++;
}

// Answer to the Question number 8
// 8. Run a loop from 30 to 86. This loop will stope if the values get higher than 44. 

for (var i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    console.log(i);
}

// Answer to the Question number 9
// 9. Write the price of the books that you have. Display the prices if the price is less than 200. 

var bookPrice = [150, 230, 80, 85, 158, 201, 302, 45, 98];

for (var i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] < 200) {
        console.log(bookPrice[i]);
    }

}

