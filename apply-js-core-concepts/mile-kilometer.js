function milesToKilometer(miles) {
    const kiloMeter = miles * 1.609;
    return kiloMeter;
}
let totalMiles = 50;
var kilo = milesToKilometer(totalMiles);
console.log(totalMiles, "Miles Converting to Kilometer:  It's", kilo);