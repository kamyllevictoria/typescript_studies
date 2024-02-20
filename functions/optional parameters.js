"use strict";
//type  of arguments
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}
console.log(mergeArrays([1, 2, 3], [0, 5])); //ok, mas e se quisermos mesclar 2 tipos?
console.log(mergeArrays([1, 2, 3], ['test']));
//optional parameters
function modernGreeting(name, greet) {
    if (greet) {
        return "Hello ".concat(greet, ", ").concat(name, ". Welcome back!");
    }
    return "Hello, ".concat(name, ", how are you?"); //retoro caso o parametro greet nao seja informado
}
console.log(modernGreeting('Kamylle', 'Sr'));
//default parameters
function sumDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(sumDefault(10));
//unknown
function doSomething(x) {
    //console.log(x[0]) //erro, pois nao temos uma validação para x como array
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log("The number ".concat(x, " its a number"));
    }
    else if (typeof x === 'string')
        console.log("The number ".concat(x, " its a string"));
    //conseguimos exibir a posição 0 de , pois ocorre uma valizadao previa
}
doSomething([1, 2, 3, 4, 5, 6]);
doSomething('2');
//never
function showError(msg) {
    throw new Error(msg);
}
//showError("Some error!")
//rest parameters 
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3));
//destructuring
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "Price: ".concat(price, " Name: ").concat(name);
}
var shirt = { name: "t-shirt", price: 50.00 };
console.log(showProductDetails(shirt));
//e uma tecnica para extrair e descompactar valores de arrays, objetos etc.
