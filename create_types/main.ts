// generics
function showData<T>(arg: T): string{
    return `The data is ${arg}`
}

console.log(showData(5))
console.log(showData("generic test..."))



//contraints in generics
function showProductName<T extends {name: string}>(obj: T){
    return `The product name is ${obj.name}`
} //podemos declarar um objeto com o tipo T com varias propriedades, como string ou boolean, mas neste caso, declaramos como T pois temos n propriedades não fixas

const myProduct1 = {name: 'Phone', color: 'black'}
const myProduct2 = {name: 'Headset', color: 'red', type: 'apple'}

console.log(showProductName(myProduct1))
console.log(showProductName(myProduct2))

//neste codigo temos que a nossa propriedade que sempre deve ser garantida é name, pois informamos isso em nosa tipagem <T extends {name: string}>, tanto é que, se não informamos o name de alguma constante, uma mensagem de erro é exibida


//interfaces with generics
interface myObj <T, U, C>{
    name:string
    wheels: T
    engine: U
    color: C
}

//criando um tipo usando interface usando generics
type car = myObj<number, number>
type pen = myObj <boolean, boolean, string> //criando novos tipos

const myCar: car = {name: 'Polo', wheels: 4, engine: 1, color: 'white'}
const myPen: pen = {name: 'Bic', wheels: false, engine: false, color: 'blue'}


console.log(myCar)
console.log(myPen) 