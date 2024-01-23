"use strict";
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
const names = ['Ana', 'Kamylle'];
//data types
let persons = 3; //number
const validNum = true; //boolean
const lastName = 'Kamylle'; //string
let idk = 5; //the any variable adapts according to the data that is assigned to it, therefore, it is a bit contradictory to the typescript check
idk = true;
//lists
const numberList = [1, 2, 3, 4, 5]; //number list
const booleanList = [true, false, false, true]; //boolean list
const stringList = ['Lucas', 'Kamylle', 'Lili']; //string list
//tuples
const peopleList = [21, 'Lucas', true];
//lits of tuples
const totalPeople = [
    [20, 'Kamylle'],
    [21, 'Lucas'],
];
//We inform the types that must be entered in order by the user, that is, it is a list with a number and a string, the order of information cannot change
//intersections
const productIDs = '1';
//when we have intersections, we have that a value can vary, in this case it is a string and a number
//enum
var turnOn;
(function (turnOn) {
    turnOn[turnOn["on"] = 1] = "on";
    turnOn[turnOn["off"] = 2] = "off";
})(turnOn || (turnOn = {}));
const turn = turnOn.on; //1
//We use the enum to assign a value x to a property y:
//type Assertions:
const itemName = 'Cap';
const itemType = itemName;
//its a variable treatment, when we need to attribute a type for a variable
