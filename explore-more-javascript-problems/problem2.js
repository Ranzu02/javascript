// 2. Centimeter to meter
function centimeterToMeter(centimeter) {
    var meter = centimeter / 100;
    return meter;
}
const centimeter = 1200;
const finalMeter = centimeterToMeter(centimeter);
console.log(centimeter, " centimeter is equal to:", finalMeter, "Meter.");