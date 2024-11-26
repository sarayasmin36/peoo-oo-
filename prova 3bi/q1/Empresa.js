"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const Funcionario_1 = require("./Funcionario");
class Empresa {
    constructor(nomeEmpresa) {
        this.funcionarios = Funcionario_1.Funcionario[] = [];
        this.nomeEmpresa = nomeEmpresa;
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log("Funcionario adicionado");
    }
    listarFuncionarios() {
        console.log("LISTAGEM DOS LIVROS:");
        this.funcionarios.forEach(funcionario => {
            console.log("- " + funcionario.descricao());
        });
    }
    aplicarAumento(percentual) {
        if (this.percentual >= 0) {
            return this.salario += this.percentual;
        }
        else {
            console.log('Sem percentual de aumento');
            return this.salario;
        }
    }
}
exports.Empresa = Empresa;
