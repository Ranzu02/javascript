function getOdd(numbers) {
    var arrayOdd = [];
    
    for(let i = 0; i <numbers.length; i++){
        const arrayItem = numbers[i];
        
        if(arrayItem % 2 !== 0){
            arrayOdd.push(arrayItem);
        }
       
    }
    console.log(arrayOdd);
}

const myNumbers = [87, 23, 89, 58, 65, 32, 45, 94, 14, 82];
getOdd(myNumbers);