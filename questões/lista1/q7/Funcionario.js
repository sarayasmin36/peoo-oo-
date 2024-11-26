"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.descricao = function () {
        return "Funcion\u00E1rio: ".concat(this.nome, ", Sal\u00E1rio: R$ ").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
