"use strict";
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(3, 4));
function identify(arg) {
    console.log(arg.length);
    return arg;
}
//identify(2) //agora que a função genérica esta restrita, não podemos chama-la desta forma, usamos:
console.log(identify({ length: 10, value: 3 }));
