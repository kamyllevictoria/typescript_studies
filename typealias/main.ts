//typealias
type ID = string | number


function showID(id: ID){
    console.log(`The Id its a: ${id}`)
}

showID(1)

//we use typealias to define our data types, it is similar to union, but we declare the type and use it as a kind of 'variable' so it is easier to find. In this case we have that the ID is string or number, so we declare our id as ID: id: ID 

type myNum = number;

let age: myNum;
age = 25;

function doubleNum(num: myNum): myNum {
    return num * 2;
}
