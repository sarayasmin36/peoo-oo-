"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_1 = require("./Funcionario");
class Gerente extends Funcionario_1.Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }
    calcularSalarioTotal() {
        if (this.bonus >= 0) {
            return this.salario += this.bonus;
        }
        else {
            console.log('Sem bônus!');
            return this.salario;
        }
    }
    descricao() {
        return `Gerente: ${this.nome}, Salário base: R$ ${this.salario.toFixed(2)}, Bônus: R$ ${this.bonus.toFixed(2)}, Salário Total: R$${this.calcularSalarioTotal().toFixed(2)}`;
    }
}
exports.Gerente = Gerente;
