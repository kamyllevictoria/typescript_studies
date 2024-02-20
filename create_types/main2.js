"use strict";
//typeof type
var userName = "kamylle";
var userName2 = 'Caio';
var newTruck = {
    km: 1000,
    kg: 2000,
    description: 'Truck with low kilograms.'
};
function showKm(km, kg, description) {
    console.log("Km: ".concat(km, ", Kg: ").concat(kg, ", Description: ").concat(description));
}
showKm(newTruck.km, newTruck.kg, newTruck.description);
