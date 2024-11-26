"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario_1 = require("./Funcionario");
var Gerente_1 = require("./Gerente");
var funcionario = new Funcionario_1.Funcionario('Ana Rosa', 3000);
console.log(funcionario.descricao());
funcionario.salario = 5000;
console.log(funcionario.descricao());
funcionario.salario = -50; // não aceita a mudança de salário
console.log(funcionario.descricao());
var gerente = new Gerente_1.Gerente('Julia Santana', 5000, 2000);
console.log(gerente.descricao());
