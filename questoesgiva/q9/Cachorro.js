"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log('Latido');
    }
}
exports.Cachorro = Cachorro;
