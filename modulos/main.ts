import importGreet from "./greet.js";
importGreet()
//precisamos importar os arquivos como .js pois a importação de modulos ocorre pelo node.js e ele nao consegue exportar modulos com a extensão de typescript

//importando variaveis
import {x} from "./variable.js" //para a importação de variaveis usamos chaves, pois estamos usando outro decurso, o destructuring
console.log(x)


//multiplas importações
import {a, b, myFunction} from './multiple.js'
console.log(a) //podemos ter acesso a todas as variaveis no arquivo multiple.ts


//importando tipos
import *as myNumbers from './numbers.js' //precisamos importar um typealias para termos acesso a todos os dados presentes no numbers.ts

console.log(myNumbers)

const nx = myNumbers.n1
console.log(nx) //valor de n1