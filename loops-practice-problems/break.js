var numbers = [12, 53, 23, 87, 334, 54, 19, 76, 45, 34];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50){
        break;
    }
    console.log(number);
}