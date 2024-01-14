function matchFinder(string1, string2) {
    
    if(typeof(string1) !== "string" || typeof(string2) !== "string"){
        return "Please enter a valid string";
    }
    // Checking without case sensitive
    else if(string1.toLowerCase().includes(string2.toLowerCase())){
        return true;
    }
    else {
        return false;
    }
}

const check = matchFinder("Hello", "LLo");
console.log(check);