
let numbers: number[] = [1,2,3,4]
numbers.push(5)
console.log(numbers[2])

const names: string[] = ['Ana', 'Kamylle']

//data types
let persons: number = 3 //number
const validNum: boolean = true //boolean
const lastName: string = 'Kamylle' //string
let idk: any = 5 //the any variable adapts according to the data that is assigned to it, therefore, it is a bit contradictory to the typescript check
idk = true



//lists
const numberList: number[] = [1,2,3,4,5] //number list
const booleanList: boolean[] = [true,false,false,true] //boolean list
const stringList: string[] = ['Lucas', 'Kamylle', 'Lili'] //string list



//tuples
const peopleList: [number,string,boolean] = [21, 'Lucas', true]


//lits of tuples
const totalPeople: [number,string][] = [
    [20, 'Kamylle'],
    [21, 'Lucas'],
]
//We inform the types that must be entered in order by the user, that is, it is a list with a number and a string, the order of information cannot change



//intersections
const productIDs: string | number = '1'
//when we have intersections, we have that a value can vary, in this case it is a string and a number



//enum
enum turnOn{
    on = 1,
    off = 2
}
const turn = turnOn.on //1
//We use the enum to assign a value x to a property y:


//type Assertions:
const itemName: any = 'Cap'
const itemType = itemName as string
//its a variable treatment, when we need to attribute a type for a variable