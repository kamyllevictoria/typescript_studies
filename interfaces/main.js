"use strict";
//The interface is used to standardize our object resources, in this case, the coordinates of the x, y and z axes must be of type number.
function showCoords(object) {
    console.log("X: ".concat(object.x, " Y: ").concat(object.y, " Z: ").concat(object.z));
}
//The function is used to perform formatting for display in console.log and, the declaration of our object is of type Point, as it requires all axes to be of type number, so, in order not to have extensive code, we use Point
var coordObject = {
    x: 10,
    y: 15,
    z: 9,
};
showCoords(coordObject);
