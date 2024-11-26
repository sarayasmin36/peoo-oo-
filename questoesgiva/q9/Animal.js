"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    emitirSom() {
        console.log('Som do animal');
    }
}
exports.Animal = Animal;
