"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    descricao() {
        return `Funcionário: ${this.nome}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
}
exports.Funcionario = Funcionario;
