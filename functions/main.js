"use strict";
//void
function withoutReturn() {
    console.log('void console');
    return; //no exemplo de return 12, parecerá um erro, pois não podemos realizar um retorno de algo distinto de void, number não será aceito
}
withoutReturn();
//callback
function greeting(name) {
    return `Hello, ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparing function...');
    const greet = f(userName);
}
//em callback temos que preGreeting é a nossa função principal qie recebe 2 argumentos, o primeiro f: name:string e o segundo, username:string 
preGreeting(greeting, 'ana');
//generic functions
function firstElement(array) {
    return array[0];
} //como não sabemos o que vai vir no nosso array, seja string, boolean ou number, informamos o parametor do tipo t, tanto é que, se colocarmos o retorno da função como string, aparecerá um erro, pois definimos em <T> o tipo de variavel global
console.log(firstElement(['a', 'b']));
console.log(firstElement([1, 2, 2]));
//se tentarmos colocar um tipo que não seja um array, aparecerá um erro, justamente pq definimos no nosso parâmetro
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObj = mergeObjects({ name: "Kamylle" }, { age: 30, job: "programmer" }); //2 objetos unidos, obj1 com suas propriedades name e obj2 com propriedades age e job
console.log(newObj);
