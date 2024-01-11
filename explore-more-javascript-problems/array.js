const name = "Bangladesh";
const age = 52;
const isIndependent = true;
const detailsOfAFriend = {name:"Agun", age:21, class:12};
const friends = [25, 85, 14, 65, 28, 41, 27];

console.log(typeof name);
console.log(typeof age);
console.log(typeof friends);
console.log(Array.isArray(friends));

// Check an item on the array

console.log(friends.includes(25));
console.log(friends.includes(9));

// Different way to check

if(friends.indexOf(21) !== -1){

    console.log("This number is in the array")
}

else{
    console.log("This number is not in the array");
}


// Concat 2 or more arrays

const newFriends = [25, 16, 32, 45];
const allFriends = newFriends.concat(friends);
console.log(allFriends);