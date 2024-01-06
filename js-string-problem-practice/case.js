const userName = "Ranzu";
const userEntered = "ranzu";
// userName = "ranzu";

if (userName.toLocaleLowerCase() == userEntered.toLocaleLowerCase()){
    console.log("User name matched");
}
else{
    console.log("User name not matched");
}
// Adding two string
const fullName = userName + " " +userEntered;
console.log(fullName);