function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T;
    if(+a > +b){
        biggest = a
    } else{
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(3,4))
//console.log(biggestNumber('1', 2)) //nao podemos usar tipos distintos, devem ser iguais, pois o nosso generic é igual para ambos (T), logo, devem ser iguais





//generics e constraints
interface lengthWise{
    length: number;
}


function identify<T extends lengthWise>(arg: T): T{
    console.log(arg.length)
    return arg
}

//identify(2) //agora que a função genérica esta restrita, não podemos chama-la desta forma, usamos:

console.log(identify({length: 10, value: 3}))