function findAddress(address) {
    
    // console.log(keys);
        let newAddress = {street:"", house:"", society:""};
        Object.assign(newAddress, address);
        // console.log(newAddress);
        const keys = Object.keys(newAddress);
        var streetName = newAddress[keys[0]] || "__";
        var houseName = newAddress[keys[1]] || "__";
        var societyName = newAddress[keys[2]] || "__";
        var addressOutput = streetName + "," + houseName + "," + societyName;
        return addressOutput;

}

const address = {street: 5,  society:"Earth Perfect"};
const finalAddress = findAddress(address);
console.log(finalAddress);


/* function findAddress(address) {
    
    
        let newAddress = {street:"", house:"", society:""};
        Object.assign(newAddress, address);
        const keys = Object.keys(newAddress);
        console.log(keys[0]);
        let streetName = newAddress[keys[0]] || "__";
        let houseName = newAddress[keys[1]] || "__";
        let societyName = newAddress[keys[2]] || "__";
        console.log(streetName,",",houseName,",",societyName);

}

const address = {street: 5, society:"Earth Perfect"};
const finalAddress = findAddress(address); */

