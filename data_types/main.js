"use strict";
var numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
var names = ['Ana', 'Kamylle'];
//data types
var persons = 3; //number
var validNum = true; //boolean
var lastName = 'Kamylle'; //string
var idk = 5; //the any variable adapts according to the data that is assigned to it, therefore, it is a bit contradictory to the typescript check
idk = true;
//lists
var numberList = [1, 2, 3, 4, 5]; //number list
var booleanList = [true, false, false, true]; //boolean list
var stringList = ['Lucas', 'Kamylle', 'Lili']; //string list
//tuples
var peopleList = [21, 'Lucas', true];
//lits of tuples
var totalPeople = [
    [20, 'Kamylle'],
    [21, 'Lucas'],
];
//We inform the types that must be entered in order by the user, that is, it is a list with a number and a string, the order of information cannot change
//intersections
var productIDs = '1';
//when we have intersections, we have that a value can vary, in this case it is a string and a number
//enum
var turnOn;
(function (turnOn) {
    turnOn[turnOn["on"] = 1] = "on";
    turnOn[turnOn["off"] = 2] = "off";
})(turnOn || (turnOn = {}));
var turn = turnOn.on; //1
//We use the enum to assign a value x to a property y:
//type Assertions:
var itemName = 'Cap';
var itemType = itemName;
//its a variable treatment, when we need to attribute a type for a variable
