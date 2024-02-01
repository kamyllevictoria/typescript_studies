//type  of arguments
function mergeArrays<T>(array1: T[], array2: T[]){
    return array1.concat(array2)
}

console.log(mergeArrays([1,2,3], [0, 5])) //ok, mas e se quisermos mesclar 2 tipos?
console.log(mergeArrays<number | string>([1,2,3],['test']))


//optional parameters
function modernGreeting(name: string, greet?: string){
    if(greet){
        return `Hello ${greet}, ${name}. Welcome back!`
    }

    return `Hello, ${name}, how are you?` //retoro caso o parametro greet nao seja informado
}
console.log(modernGreeting('Kamylle', 'Sr'))


//default parameters
function sumDefault(n: number, m = 10){
    return n + m
}
console.log(sumDefault(10))



//unknown
function doSomething(x: unknown){
    //console.log(x[0]) //erro, pois nao temos uma validação para x como array
    if(Array.isArray(x)){
        console.log(x[0])
    } else if(typeof x === 'number'){
        console.log(`The number ${x} its a number`)
    } else if(typeof x === 'string')
    console.log(`The number ${x} its a string`)
    
    
    //conseguimos exibir a posição 0 de , pois ocorre uma valizadao previa
    
}

doSomething([1,2,3,4,5,6])
doSomething('2')


//never
function showError(msg: string): never{
    throw new Error (msg)
}

//showError("Some error!")

//rest parameters 
function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)

}
console.log(sumAll(1,2,3,4,5))
console.log(sumAll(1,2,3))



//destructuring
function showProductDetails({name, price}: {name:string, price: number}):string{
    return  `Price: ${price} Name: ${name}`
}

const shirt = {name: "t-shirt", price: 50.00}
console.log(showProductDetails(shirt))

//e uma tecnica para extrair e descompactar valores de arrays, objetos etc.