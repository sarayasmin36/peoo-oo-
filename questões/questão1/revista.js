"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const itembiblioteca_1 = require("./itembiblioteca");
class Revista extends itembiblioteca_1.ItemBiblioteca {
    constructor(titulo, anoPublicacao, editora, numeroEdicao) {
        super(titulo, anoPublicacao);
        this.editora = editora;
        this.numeroEdicao = numeroEdicao;
    }
    exibirInformacoes() {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}, Edição: ${this.numeroEdicao}`;
    }
}
exports.Revista = Revista;
