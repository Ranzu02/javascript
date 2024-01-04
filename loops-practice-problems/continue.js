var numbers = [12, 53, 23, 87, 334, 54, 19, 76, 45, 34];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50){
        continue;
    }
    console.log(number);
}

var i = 0;

for (i = 0; i < 5; i++) {
    console.log(i);
}

var j = 0;

while (j <= 5) {
    j++;
    console.log(j);
}