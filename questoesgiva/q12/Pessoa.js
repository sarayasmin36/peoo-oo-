"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, endereco) {
        this._nome = nome;
        this._endereco = endereco;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }
    get endereco() { return this._endereco; }
    set endereco(endereco) { this._endereco = endereco; }
    mostrarEndereco() {
        console.log(`Endereço de ${this._nome}: ${this._endereco.rua}, ${this._endereco.cidade} - CEP: ${this._endereco.cep}`);
    }
}
exports.Pessoa = Pessoa;
