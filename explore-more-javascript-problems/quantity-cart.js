const cart = [
    {name:"Shirt", price:2000, quantity:2},
    {name:"pant", price:4000, quantity:3},
    {name:"Shoe", price:3000, quantity:5},
    {name:"Belt", price:600, quantity:4},
];

var cartTotal = 0;

for ( var i = 0; i < cart.length; i++) {
    const item = cart[i];
    // console.log(item);
    cartTotal = cartTotal + item.price * item.quantity;
}

console.log(cartTotal);