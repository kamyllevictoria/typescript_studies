"use strict";
class Car {
    constructor() {
        this.label = 'Generic car';
        this.numWheels = 4;
    }
    horn() {
        return 'beeep beep';
    }
}
class Truck extends Car {
    constructor() {
        super(...arguments);
        this.label = 'Truck';
        this.numWheels = 18;
    }
}
class Vespa extends Car {
    constructor() {
        super(...arguments);
        this.label = 'Vespa';
        this.numWheels = 2;
    }
}
function washCar(car) {
    console.log(`Received a ${car.label} in the car wash!`);
    console.log(`Cleaning all ${car.numWheels} tires.`);
    console.log(`Beeping horn ${car.horn()}`);
    console.log(`Returning your car now!`);
    return car;
}
const myVespa = new Vespa();
washCar(myVespa);
console.log('----------------');
const myTruck = new Truck();
washCar(myTruck);
