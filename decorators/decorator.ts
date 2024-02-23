//decorator and classes
class User{
    name
    constructor(name: string){
        this.name = name
    }
}  
const kamylle = new User("Kamylle")
console.log(kamylle)



//decorator and methods 
function enumerable(value: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    }
}
class Machine{
    name
    constructor(name: string){
        this.name = name
    }
    @enumerable(false) //usando o false, o showName nao é exibido, já, com true, o metodo é exibido
    showName(){
        return `The machine name is: ${this.name}`
    }
}

const trator = new Machine("Trator")
trator.showName()
console.log(trator)


//decorator and classes
function log(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value
    descriptor.value = function(args: any[]){
        console.log(`Method ${name} called with json args: %{JSON.string}`)
    }
}

//decorator and accessor
class Monster{
    name?
    age?
    constructor(name: string, age:number){
        this.name = name,
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `The monster's name is ${this.name}`
    }

    get showAge(){
        return `The monster's age is: ${this.age}`
    }
}

const vampire = new Monster("Vampire", 100)
console.log(vampire)


//decorator and accessor part II
function mySecondDecorator(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.get;

        descriptor.get = function(){
            console.log(`Calling the property ${propertyKey}`)
            return originalMethod?.call(this)
        }

        return descriptor
    }
}

class mySecondClass{
    private _myProperty: string = 'This is my private property!'

    @mySecondDecorator()
    get myProperty():string{
        return this. _myProperty;
    }

}

const instance = new mySecondClass()
console.log(instance.myProperty)