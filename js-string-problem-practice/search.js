const lyrics = "Tumi bondhu kala paKhi ami jeno ki? Bosonto kale tumai bolte parini. Sada sada kala kala";
const lyricsLowerCase = lyrics.toLowerCase();
const searchIncludes = "pakhi";
const searchIncludesLower = searchIncludes.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchIncludesLower);
console.log(doesExist);

// Doing the same thing in one line

const doesExistOneLine = lyrics.toLowerCase().includes(searchIncludes.toLowerCase());
console.log(doesExistOneLine);

// Findig IndexOf of an string

console.log(lyrics.indexOf("kala"));

if (lyrics.indexOf("sada") !== -1){
    console.log("This string is exists inside the string");

}
else {
    console.log("We can't find it");
}

// Starts with
console.log(lyrics.startsWith("Tumi"));

console.log(lyrics.startsWith("2mi"));

// Ends with
const fileName = "ami.pdf";
const fileName2 = "ami.mp3";

console.log(fileName.endsWith(".pdf"));
console.log(fileName2.endsWith(".mp3"));


/* 
Things i have learned in this vide:
1. Check whether a keyword is exists in a string or not Example:  .includes("searchstring")
2. convert to lower or upper case .toLowerCase() and .toUpperCase()
3. indexOf of an array. Example string.indexOf("partofstring")
4. Starts with and Ends with. Example: string.startsWith("searchitem") and string.endsWith("searchitem")
*/