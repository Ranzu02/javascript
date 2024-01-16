const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Movie Cinema',
    isSingle: true,
    friends: ['Apu', 'Reja', 'Salam', 'Ammir'],
    movies: [{name:'King Khan', year:2025}, {name:"no.1", year: 2018}],
    act: function(){
        console.log("Acting like sakib khan");
    },
    car: {
        brand: 'Toyota',
        price: 500000,
        made:2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask'
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act()