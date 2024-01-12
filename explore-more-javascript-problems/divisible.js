
// 1. Disply numbers from 1-50
// 2. If any of the number is divisible by 3, remove that number and replace it by "foo";
// 3. If any of the number is divisible by 5, remove that number and replace it by "bar";
// 2. If any of the number is divisible by 3 and 5, remove that number and replace it by "foobar";


for (var i = 1; i <= 50; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("foobar");
    }
    else if( i % 3 === 0){
        console.log("foo");
    }
    else if( i % 5 === 0){
        console.log("bar")
    }
    else{
        console.log(i);
    }

}