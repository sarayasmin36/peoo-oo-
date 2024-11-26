"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor(livros) {
        this.livros = [];
        if (livros) {
            livros.forEach(livro => {
                this.livros.push(livro);
            });
        }
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log("Livro adicionado.");
    }
    adicionarLivros(vetor) {
        vetor.forEach(livro => {
            this.livros.push(livro);
        });
        console.log("Livros adicionado.");
    }
    listarLivros() {
        console.log("LISTAGEM DOS LIVROS:");
        this.livros.forEach(livro => {
            console.log("- " + livro.descricao());
        });
    }
}
exports.Biblioteca = Biblioteca;
