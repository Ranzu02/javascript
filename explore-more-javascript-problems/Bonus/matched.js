const numbers = [45, 65, 23, 98, 19];

// for ( var i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


for (const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'Walton', price: 19000},
    {id: 2, name: 'iPhone', price: 19000},
    {id: 3, name: 'mack book air', price: 19000},
    {id: 4, name: 'lenovo phone', price: 19000},
    {id: 5, name: 'samsung phone', price: 19000},
    {id: 6, name: 'Nokia phone', price: 19000},
    
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for (const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, "phone");
console.log(result);