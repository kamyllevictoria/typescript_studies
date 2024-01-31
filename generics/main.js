"use strict";
class IdentityClass {
    constructor(value) {
        this.value = value;
    }
    getIdentity() {
        return this.value;
    }
}
const myNumberClass = new IdentityClass(1);
console.log(myNumberClass.getIdentity());
const myStringClass = new IdentityClass('welcome!');
console.log(myStringClass.getIdentity());
