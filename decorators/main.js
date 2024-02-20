"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log('Initializing method execution');
    return function (target, propertKey, descriptor) {
        console.log("Running decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
    //com essa função que é retornada, temos acesso aos argumentos especiais do decorator
}
//nao podemos colocar o decorator em qualquer lugar, precisamos nos atentarmos pois cada um possui uma maneira de ser aplicado
class myClass {
    testing() {
        console.log('Finalizing method execution');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//automaticamente, quando criarmos uma nova instancia do nosso objeto, os metodos do decorator serão executados também, pois realizamos sua inserção na classe myClass
