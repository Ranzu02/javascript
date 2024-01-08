const number = Math.pow(3, 9);
console.log(number);

const boy = 45;
const girl = 25;

const gap = Math.abs(girl - boy); // This will eleiminate the negative sign.

if(gap > 10){
    console.log("Please stay apart");
}
else {
    console.log("You guys can mingle");
}

// Make a fraction number to rounded
const number2 = 30.558;
const number3 = Math.round(number2);
console.log(number3);

// Rounded up

const number4 = 4.205588;
const number5 = Math.ceil(number4);
console.log(number5);


// Rounde to below

const number6 = 52.0147;
const number7 = Math.floor(number6);
console.log(number7);

// Random numbers

const random = Math.random();
console.log(random);

// Random number from 0 to 100 and eleminate fractions

const fullRandom = Math.round(Math.random()*100);
console.log(fullRandom);

// Random number from 0 to 6 for 20 times by using for loop

for (var i = 0; i < 20; i++){
    const zeroToSix = Math.round(Math.random()*6);
    if (zeroToSix != 0){
       
        console.log(zeroToSix);
    }
   else {
    i--;
   }
}   