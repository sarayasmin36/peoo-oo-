"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Endereco_1 = require("./Endereco");
const Pessoa_1 = require("./Pessoa");
const endereco = new Endereco_1.Endereco('Rua das Flores', 'São Paulo', '01234-567');
const pessoa = new Pessoa_1.Pessoa('João Silva', endereco);
pessoa.mostrarEndereco();
