"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
//precisamos importar os arquivos como .js pois a importação de modulos ocorre pelo node.js e ele nao consegue exportar modulos com a extensão de typescript
//importando variaveis
const variable_js_1 = require("./variable.js"); //para a importação de variaveis usamos chaves, pois estamos usando outro decurso, o destructuring
console.log(variable_js_1.x);
//multiplas importações
const multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a); //podemos ter acesso a todas as variaveis no arquivo multiple.ts
//importando tipos
const myNumbers = __importStar(require("./numbers.js")); //precisamos importar um typealias para termos acesso a todos os dados presentes no numbers.ts
console.log(myNumbers);
const nx = myNumbers.n1;
console.log(nx); //valor de n1
