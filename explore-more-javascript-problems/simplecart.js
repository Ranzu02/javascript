const cart = [
    {name:"Shirt", price:2000},
    {name:"pant", price:4000},
    {name:"Shoe", price:3000},
    {name:"Belt", price:600}
];

var cartTotal = 0;

for ( var i = 0; i < cart.length; i++) {
    const item = cart[i];
    // console.log(item);
    cartTotal = cartTotal + item.price;
}

console.log(cartTotal);