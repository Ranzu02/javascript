const lyrics = "Tumi bondhu kala paKhi ami jeno ki? Bosonto kale tumai bolte parini. Sada sada kala kala";
console.log(lyrics);
const parts = lyrics.split(" ");
console.log(parts);

const sentence = lyrics.split(".");
console.log(sentence);

const caharacters = lyrics.split("");
console.log(caharacters);

const partial = lyrics.slice(2, 8);
console.log(partial);

const partial2 = lyrics.substring(2, 8);
console.log(partial2);

// Concat

const str1 = "Hello";
const str2 = "World";

const fullStr = str1.concat(",", " ", str2);
console.log(fullStr);

// Concat all the strings of an array to a single array.

const lines = [ 'Tumi bondhu kala paKhi ami jeno ki? Bosonto kale tumai bolte parini',
'Sada sada kala kala']

const fullLine = lines.join(". ");
console.log(fullLine);

// Finding character by using index number of a string
const singleCharacter = lyrics.at(5);
console.log(singleCharacter);