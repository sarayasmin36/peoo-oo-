"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
class Catalogo {
    constructor() {
        this.filmes = [];
    }
    adicionarProduto(filme) {
        this.filmes.push(filme);
        console.log("Filme adicionado.");
    }
    listarFilmes() {
        console.log("LISTAGEM DOS FILMES:");
        this.filmes.forEach(filme => {
            console.log("- " + filme.());
        });
    }
}
exports.Catalogo = Catalogo;
