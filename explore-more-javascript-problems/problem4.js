// 4. ['sjid', 'mamun', 'jubayer bin rased', 'chinku']; {Find the biggest name}

function bestFriend(friends) {
    var bigName =[];
    for( var i = 0; i < friends.length; i++){
        const name = friends[i];
        if (name.length > bigName.length) {
            bigName = name;
        }
        
    }
    return bigName;
}


const friends = ['Sajid', 'Jubayer bin rased', 'Chinku', 'Md kamrul Hasan Ranzu'];
// bestFriend(friends);
const newBestFriend = bestFriend(friends);
console.log("The bigest name on the friend list is:", newBestFriend);

