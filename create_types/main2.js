"use strict";
//typeof type
const userName = "kamylle";
const userName2 = 'Caio';
const newTruck = {
    km: 1000,
    kg: 2000,
    description: 'Truck with low kilograms.'
};
function showKm(km, kg, description) {
    console.log(`Km: ${km}, Kg: ${kg}, Description: ${description}`);
}
showKm(newTruck.km, newTruck.kg, newTruck.description);
