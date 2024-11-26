"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }
    get salario() { return this._salario; }
}
exports.Funcionario = Funcionario;
