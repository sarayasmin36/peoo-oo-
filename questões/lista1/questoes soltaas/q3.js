"use strict";
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
class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log("Livro adicionado.");
    }
    listarLivros() {
        console.log("LISTAGEM DOS LIVROS:");
        this.livros.forEach(livro => {
            console.log("- " + livro.descricao());
        });
    }
}
const livro1 = new Livro("Poemas", "Emily Dickinson", 50.30);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
let biblio = new Biblioteca();
biblio.adicionarLivro(livro1);
biblio.adicionarLivro(livro2);
biblio.adicionarLivro(livro3);
biblio.listarLivros();
biblio.adicionarLivro(new Livro("O Pequeno Príncipe", "Saint-Exupery", 30));
biblio.listarLivros();
