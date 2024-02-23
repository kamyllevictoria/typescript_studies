"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator and classes
class User {
    constructor(name) {
        this.name = name;
    }
}
const kamylle = new User("Kamylle");
console.log(kamylle);
//decorator and methods 
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `The machine name is: ${this.name}`;
    }
}
__decorate([
    enumerable(false) //usando o false, o showName nao é exibido, já, com true, o metodo é exibido
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
trator.showName();
console.log(trator);
//decorator and classes
function log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (args) {
        console.log(`Method ${name} called with json args: %{JSON.string}`);
    };
}
//decorator and accessor
class Monster {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    get showName() {
        return `The monster's name is ${this.name}`;
    }
    get showAge() {
        return `The monster's age is: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const vampire = new Monster("Vampire", 100);
console.log(vampire);
//decorator and accessor part II
function mySecondDecorator() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.get;
        descriptor.get = function () {
            console.log(`Calling the property ${propertyKey}`);
            return originalMethod === null || originalMethod === void 0 ? void 0 : originalMethod.call(this);
        };
        return descriptor;
    };
}
class mySecondClass {
    constructor() {
        this._myProperty = 'This is my private property!';
    }
    get myProperty() {
        return this._myProperty;
    }
}
__decorate([
    mySecondDecorator()
], mySecondClass.prototype, "myProperty", null);
const instance = new mySecondClass();
console.log(instance.myProperty);
