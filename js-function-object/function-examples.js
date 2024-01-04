function averageMarks(subject1, subject2, subject3) {
    var total = subject1 + subject2 + subject3;
    var average = total / 3;
    return average;
}

var semester1 = averageMarks(82, 45, 57);
var semester2 = averageMarks(95, 86, 78);
var semester3 = averageMarks(85, 65, 75);

var finalAverage = averageMarks(semester1, semester2, semester3);
finalAverage = finalAverage.toFixed(2);
finalAverage = parseFloat(finalAverage);
console.log(finalAverage);

