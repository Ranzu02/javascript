var shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 1,
    mouse: 1,
    pen: 25
}

// When you know the property name, use dot notation
var penCount = shoppingCart.pen;
console.log(penCount);
// Aleternative way when you know the property name.
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
console.log(properties);

var values = Object.values(shoppingCart);
console.log(values);

console.log(shoppingCart);


// Set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

// Set property values with varibale
shoppingCart[propertyName]= 20;
console.log(shoppingCart);