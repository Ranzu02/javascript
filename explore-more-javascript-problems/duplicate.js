const names = ["abul", "babul", "cabul", "kabul", "abul", "babul", "dabul", "dabul"];

function removeDuplicate(names){
    const unique = [];
    for( var i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqNames = removeDuplicate(names);
console.log(uniqNames);