"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log('Miau');
    }
}
exports.Gato = Gato;
