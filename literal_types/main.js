"use strict";
//literal types with functions
function getStatusMessage(status) {
    if (status === 'sucess') {
        return "test 1";
    }
    else if (status === 'error') {
        return 'test 2';
    }
    else {
        return 'test 3';
    }
}
var message1 = getStatusMessage('sucess'); //test 1
//const message2 = getStatusMessage('test') //error
var message3 = getStatusMessage('error'); //test 2
var local1 = {
    latitude: -150,
    longitude: 45,
    status: 'active'
}; //valid
/*const local2: Coordinates = {
    latitude: 65985,
    longitude: 2983,
    status: 'teste'	//erro

}*/
//error, as this 'test' was not defined in our set of literal types Coordinates
//Here, Coordinates is an interface that includes a property called status with a literal type that can only be "active" or "inactive".
