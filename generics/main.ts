interface GenericInterface<U>{
    value: U
    getIdentity: () => U
}
 
class IdentityClass <T> implements GenericInterface<T>{
    value: T

    constructor(value: T){
        this.value = value
    }

    getIdentity():T{
        return this.value
    }
}

const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity())


const myStringClass = new IdentityClass<String>('welcome!')
console.log(myStringClass.getIdentity())


