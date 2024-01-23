let numbers: number[] = [1,2,3,4]
numbers.push(5)
console.log(numbers[2])


const names: string[] = ['Ana', 'Kamylle']
console.log(names[0])


const num: Array<number> = [100,200] //sintaxe alternativa
console.log(num[0])

//parametros tipados
function sum(a:number, b:number){
    console.log(a+b)
}

sum(4,4)

//funções anonimas
setTimeout(function(){
    const sallary: number = 2000;
    
    //console.log(parseFloat(sallary))

    //console.log(sallary)

}, 2000)

