"use strict";
//type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Invalid sum, the types of a and b need to be the same.');
    }
}
sum('4', '5');
sum(1, 2);
sum('5', 4);
//check if value exists
function operations(arrayNum, operation) {
    if (operation) { //narrow
        if (operation === 'sum') {
            const sum = arrayNum.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arrayNum.reduce((i, total) => i * total);
            console.log(multiply);
        }
        else if (operation === 'sub') {
            const sub = arrayNum.reduce((i, total) => i - total);
            console.log(sub);
        }
        else if (operation === 'division') {
            const division = arrayNum.reduce((i, total) => i % total);
            console.log(division);
        }
        else {
            console.log("Please, inform an operation"); //informação não preenchida
        }
    }
}
operations([1, 2, 3, 4]);
operations([1, 2, 3], "sub");
//instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const lucas = new User('Lucas');
const kamylle = new SuperUser('Kamylle');
console.log(lucas);
console.log(kamylle);
function userGreeting(user) {
    if (User instanceof SuperUser) {
        console.log(`Hello, superuser ${user.name}, need some help?`);
    }
    else if (user instanceof User) {
        console.log(`Hello user ${user.name}`);
    }
}
userGreeting(lucas);
userGreeting(kamylle);
//in operator
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const dog_white = new Dog('Papi', 'Pastor Alemão');
const dog_black = new Dog('lulu');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log('Your dog is not a srd');
    }
    else {
        console.log('The dos is a srd!');
    }
}
