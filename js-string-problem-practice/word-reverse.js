// Word reverse of a string using split and join

function wordReverse(str) {
    let strSplit = str.split(" ");
    // console.log(strSplit);
    let reverse = [];
    for(var i = strSplit.length-1; i >=0; i--){
        let element = strSplit[i];
        // console.log(element);
        reverse.push(element);
    }
    const fullString = reverse.join(" ");
    return fullString;
}

const myString = "I am a good boy";
const finalResult = wordReverse(myString);
console.log(finalResult);