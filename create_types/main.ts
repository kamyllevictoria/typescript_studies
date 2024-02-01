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
type car = myObj<number, number, string>
type pen = myObj <boolean, boolean, string> //criando novos tipos

const myCar: car = {name: 'Polo', wheels: 4, engine: 1, color: 'white'}
const myPen: pen = {name: 'Bic', wheels: false, engine: false, color: 'blue'}


console.log(myCar)
console.log(myPen) 


//type parameters
function getSomeKey<T, K extends keyof T> (obj: T, key: K){
    return `The key its on the object and your value is ${obj[key]}`
}
//keyof t: o k é uma chave de T, ou seja, precisamos ter o k dentro de T, senão não é possível realizar a tipagem de dados

const server = {
    hd: '2TB',
    ram: '16GB'
}

console.log(getSomeKey(server, 'ram')) //32gb 
//conseguimos fazer a conexão entre objeto e seu valor, mas, ao colocarmos uma chave que não existe, teremos a presença de uma mensagem de erro, pois não é possível encontra-la




//keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}
type C = keyof Character

//conseguimos passar o argumento de uma função sendo uma propriedade das chaves de character
//nosso segundo parâmetro é um name, mas o tipo pode ser C, pois C possui a chave de Character com o uso de keyof,  ou seja, o C faz uma ligação com o name do nosso tipo, que é uma string

function showCharData(obj: Character, name: C){
    return `${obj[name]}`
}

const myChar: Character ={
    name: "Kamylle",
    age: 21,
    hasDriveLicense: true
}

console.log(showCharData(myChar,'name')) //kamylle

type Person2 = {
    name: string,
    goToSchool: boolean,
    country: string
}

const person: Person2 = {
    name: 'Lucas',
    goToSchool: true,
    country: 'Belo Horizonte'
}

function showInformation(obj: Person2){
    for(let key in obj){
       if(obj.hasOwnProperty(key)){
        console.log(`${key}: ${obj[key as keyof Person2]}`)
       }
    }
}

showInformation(person)