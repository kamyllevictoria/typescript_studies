//decorator de classe
class User{
    name
    constructor(name: string){
        this.name = name
    }
}  
const kamylle = new User("Kamylle")
console.log(kamylle)

//decorator e metodos

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