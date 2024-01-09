// String Reverse

function reverse(text) {
    let reversed = "";
    for( var i = text.length-1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
    }

    return reversed;
}

const myText = "I am a good boy";
const finalReversed = reverse(myText);
console.log(finalReversed);