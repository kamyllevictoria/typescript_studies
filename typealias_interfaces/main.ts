interface Person{
    name:string,
}

interface Person{
    age: number,
}
//adding Person's properties
const somePerson: Person = {name: 'Ana', age: 21};
console.log(somePerson)

//we can add more properties at interfaces, and in typealias, we cant

type personType = {
    name:string,
}

/*type personType{
    age:number,
} 
//error
*/


