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
var Car = /** @class */ (function () {
    function Car() {
        this.label = 'Generic car';
        this.numWheels = 4;
    }
    Car.prototype.horn = function () {
        return 'beeep beep';
    };
    return Car;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Truck';
        _this.numWheels = 18;
        return _this;
    }
    return Truck;
}(Car));
var Vespa = /** @class */ (function (_super) {
    __extends(Vespa, _super);
    function Vespa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Vespa';
        _this.numWheels = 2;
        return _this;
    }
    return Vespa;
}(Car));
function washCar(car) {
    console.log("Received a ".concat(car.label, " in the car wash!"));
    console.log("Cleaning all ".concat(car.numWheels, " tires."));
    console.log("Beeping horn ".concat(car.horn()));
    console.log("Returning your car now!");
    return car;
}
var myVespa = new Vespa();
washCar(myVespa);
console.log('----------------');
var myTruck = new Truck();
washCar(myTruck);
