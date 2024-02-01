"use strict";
// generics
function showData(arg) {
    return `The data is ${arg}`;
}
console.log(showData(5));
console.log(showData("generic test..."));
//contraints in generics
function showProductName(obj) {
    return `The product name is ${obj.name}`;
} //podemos declarar um objeto com o tipo T com varias propriedades, como string ou boolean, mas neste caso, declaramos como T pois temos n propriedades não fixas
const myProduct1 = { name: 'Phone', color: 'black' };
const myProduct2 = { name: 'Headset', color: 'red', type: 'apple' };
console.log(showProductName(myProduct1));
console.log(showProductName(myProduct2));
const myCar = { name: 'Polo', wheels: 4, engine: 1, color: 'white' };
const myPen = { name: 'Bic', wheels: false, engine: false, color: 'blue' };
console.log(myCar);
console.log(myPen);
