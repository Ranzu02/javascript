var shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 1,
    mouse: 1,
    pen: 25,
    shoes: 2
}

var propertyName = Object.keys(shoppingCart);
console.log(propertyName);

for (var i = 0; i < propertyName.length; i++) {
    var nameOfKeys = propertyName[i];
    var valueOfKeys = shoppingCart[nameOfKeys];
    console.log(nameOfKeys, valueOfKeys);
}

// for in loop
for (propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}