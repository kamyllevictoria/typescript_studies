"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            var sum_1 = arrayNum.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === 'multiply') {
            var multiply = arrayNum.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
        else if (operation === 'sub') {
            var sub = arrayNum.reduce(function (i, total) { return i - total; });
            console.log(sub);
        }
        else if (operation === 'division') {
            var division = arrayNum.reduce(function (i, total) { return i % total; });
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
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var lucas = new User('Lucas');
var kamylle = new SuperUser('Kamylle');
console.log(lucas);
console.log(kamylle);
function userGreeting(user) {
    if (User instanceof SuperUser) {
        console.log("Hello, superuser ".concat(user.name, ", need some help?"));
    }
    else if (user instanceof User) {
        console.log("Hello user ".concat(user.name));
    }
}
userGreeting(lucas);
userGreeting(kamylle);
//in operator
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var dog_white = new Dog('Papi', 'Pastor Alemão');
var dog_black = new Dog('lulu');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log('Your dog is not a srd');
    }
    else {
        console.log('The dos is a srd!');
    }
}
