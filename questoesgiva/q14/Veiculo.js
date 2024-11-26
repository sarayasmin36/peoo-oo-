"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }
}
exports.Veiculo = Veiculo;
