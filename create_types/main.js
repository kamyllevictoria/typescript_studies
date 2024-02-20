"use strict";
// generics
function showData(arg) {
    return "The data is ".concat(arg);
}
console.log(showData(5));
console.log(showData("generic test..."));
//contraints in generics
function showProductName(obj) {
    return "The product name is ".concat(obj.name);
} //podemos declarar um objeto com o tipo T com varias propriedades, como string ou boolean, mas neste caso, declaramos como T pois temos n propriedades não fixas
var myProduct1 = { name: 'Phone', color: 'black' };
var myProduct2 = { name: 'Headset', color: 'red', type: 'apple' };
console.log(showProductName(myProduct1));
console.log(showProductName(myProduct2));
var myCar = { name: 'Polo', wheels: 4, engine: 1, color: 'white' };
var myPen = { name: 'Bic', wheels: false, engine: false, color: 'blue' };
console.log(myCar);
console.log(myPen);
//type parameters
function getSomeKey(obj, key) {
    return "The key its on the object and your value is ".concat(obj[key]);
}
//keyof t: o k é uma chave de T, ou seja, precisamos ter o k dentro de T, senão não é possível realizar a tipagem de dados
var server = {
    hd: '2TB',
    ram: '16GB'
};
console.log(getSomeKey(server, 'ram')); //32gb 
//conseguimos passar o argumento de uma função sendo uma propriedade das chaves de character
//nosso segundo parâmetro é um name, mas o tipo pode ser C, pois C possui a chave de Character com o uso de keyof,  ou seja, o C faz uma ligação com o name do nosso tipo, que é uma string
function showCharData(obj, name) {
    return "".concat(obj[name]);
}
var myChar = {
    name: "Kamylle",
    age: 21,
    hasDriveLicense: true
};
console.log(showCharData(myChar, 'name')); //kamylle
var person = {
    name: 'Lucas',
    goToSchool: true,
    country: 'Belo Horizonte'
};
function showInformation(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log("".concat(key, ": ").concat(obj[key]));
        }
    }
}
showInformation(person);
