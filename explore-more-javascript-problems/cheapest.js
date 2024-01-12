const phones = [
    {brand: "Samsung", price:44000, camera:12, color:"Silver"}, 
    {brand: "iPhone", price:87000, camera:20, color:"Silver"}, 
    {brand: "Xaomi", price:60000, camera:12, color:"Silver"}, 
    {brand: "Nokia", price:44000, camera:12, color:"Silver"}, 
    {brand: "Oppo", price:20000, camera:12, color:"Silver"}, 
    {brand: "One+", price:32000, camera:12, color:"Silver"}, 

];

function cheapestPhone(phones){
    var cheap = phones[0];
    for (var i = 0; i < phones.length; i++){
        const phone = phones[i];
        console.log(phone);
        if(phone.price < cheap.price ){
            cheap = phone;
        }
    }
    return cheap;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);