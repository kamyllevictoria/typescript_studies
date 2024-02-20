"use strict";
var IdentityClass = /** @class */ (function () {
    function IdentityClass(value) {
        this.value = value;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass(1);
console.log(myNumberClass.getIdentity());
var myStringClass = new IdentityClass('welcome!');
console.log(myStringClass.getIdentity());
