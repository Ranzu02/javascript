function findLeapYear(number) {
    var newLeapYear = [];
    for(var i = 0; i < number.length; i++){
        var year = number[i];
        // console.log(year);
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            newLeapYear.push(year);
        }
    }
    console.log(newLeapYear);
}
var years = [2014, 100, 2024, 2018, 2017, 2082, 2028];
findLeapYear(years);