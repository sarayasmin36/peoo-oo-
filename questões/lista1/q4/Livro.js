"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    getPreço() {
        return this.preco;
    }
    setPreço(preco) {
        if (preco >= 0)
            this.preco = preco;
        else
            console.log('Livro gratuito? Não existe.');
    }
    descricao() {
        return `Titulo: ${this.titulo},\n Autor: ${this.autor},\n Preço: ${this.preco.toFixed(2)}`;
    }
}
exports.Livro = Livro;
