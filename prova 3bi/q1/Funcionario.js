"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario, cargo) {
        this._nome = nome;
        this._salario = salario;
        this._cargo = cargo;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }
    get salario() { return this._salario; }
    get cargo() { return this._cargo; }
    set cargo(cargo) { this._cargo = cargo; }
    descricao() {
        `Nome: ${this._nome},\n Salário: ${this._salario.toFixed(2)},\n Cargo ${this.cargo}`;
    }
}
exports.Funcionario = Funcionario;
