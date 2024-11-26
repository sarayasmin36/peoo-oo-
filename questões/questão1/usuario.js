"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(_nome, _idUsuario) {
        this._nome = _nome;
        this._idUsuario = _idUsuario;
    }
    get nome() {
        return this._nome;
    }
    emprestarItem(item) {
        console.log(`${this._nome} emprestou => ${item.exibirInformacoes()}`);
    }
}
exports.Usuario = Usuario;
