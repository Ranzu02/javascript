// 5. [45, 87, 96, 11, 63, -56, 71, 28]
function onlyPositive(number) {
    const positive = [];
    for (var i = 0; i < number.length; i++) {
        
        if(number[i] >= 0) {
            positive.push(number[i]);
        }
    }
    return positive;
}
const number = [45, 35, 85, -21, -65, 52, 74, 65, 12];
const allPositive = onlyPositive(number);
console.log(allPositive);