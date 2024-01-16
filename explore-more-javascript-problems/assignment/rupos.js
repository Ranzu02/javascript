function findAddress(obj) {
    if(typeof obj !== 'object'){
        return 'Input must be object'
    }else{
        
        const street = obj.street || '__'
        const house = obj.house || '__'
        const society = obj.society || '__'
        let output = street+ ',' + house + ',' + society;
       return output;
    }
}

const objAdd={
    street: 10,
    // house: '15A',
    // society: 'Earth Perfect'
    }
console.log(findAddress(objAdd));