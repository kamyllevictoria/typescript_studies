//decorators 
function myDecorator(){
    console.log('Initializing method execution')

    return function(target: any,
        propertKey: string | symbol,
        descriptor: PropertyDescriptor
    ){

        console.log("Running decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
    //com essa função que é retornada, temos acesso aos argumentos especiais do decorator
}

//nao podemos colocar o decorator em qualquer lugar, precisamos nos atentarmos pois cada um possui uma maneira de ser aplicado
class myClass{
    @myDecorator()
    testing(){
        console.log('Finalizing method execution')
    }
}
const myObj = new myClass()
myObj.testing()

//automaticamente, quando criarmos uma nova instancia do nosso objeto, os metodos do decorator serão executados também, pois realizamos sua inserção na classe myClass

//multiplos decorators
function b() {
    console.log("Running b!");

    return function (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log("Running b function!");
    };
}

function a() {
    console.log("Running a!");

    return function (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log("Running a function!");
    };
}

class multipleDecorators {
    @a()
    @b()
    test() {
        console.log("End!");
    }
}

//o decorator mais proximo da função executa primeiro
const multiple = new multipleDecorators()
multiple.test()