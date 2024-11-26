"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroDigital = void 0;
const Livro_1 = require("./Livro");
class LivroDigital extends Livro_1.Livro {
    constructor(titulo, autor, preco, formato) {
        super(titulo, autor, preco);
        this.formato = formato;
    }
    descricao() {
        return `${super.descricao()} # Formato: ${this.formato}`;
    }
}
exports.LivroDigital = LivroDigital;
