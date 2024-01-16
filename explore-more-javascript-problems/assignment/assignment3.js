function sortMaker(numbers) {
    var newArray = [];
    if(numbers[0] >= 0 && numbers[1] >= 0){
        if(numbers[0] > numbers[1]){
            return numbers;
        }
        else if(numbers[1] > numbers[0]) {
            newArray.push(numbers[1]);
            newArray.push(numbers[0]);
        }
        
        else {
            return "equal";
        }

        return newArray;
    }
    else {
        return "Invalid Input";
    }
    
}

const numbers = [0, 1];
const finalArray = sortMaker(numbers);
console.log(finalArray);