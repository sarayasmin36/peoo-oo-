var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.getPreço = function () {
        return this.preco;
    };
    Livro.prototype.setPreço = function (preco) {
        if (preco >= 0)
            this.preco = preco;
        else
            console.log('Livro gratuito? Não existe.');
    };
    Livro.prototype.descricao = function () {
        return "Titulo: ".concat(this.titulo, ",\n Autor: ").concat(this.autor, ",\n Pre\u00E7o: ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro adicionado.");
    };
    Biblioteca.prototype.listarLivros = function () {
        console.log("LISTAGEM DOS LIVROS:");
        this.livros.forEach(function (livro) {
            console.log("- " + livro.descricao());
        });
    };
    return Biblioteca;
}());
var livro1 = new Livro("Poemas", "Emily Dickinson", 50.30);
var livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
var livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
var biblio = new Biblioteca();
biblio.adicionarLivro(livro1);
biblio.adicionarLivro(livro2);
biblio.adicionarLivro(livro3);
biblio.listarLivros();
biblio.adicionarLivro(new Livro("O Pequeno Príncipe", "Saint-Exupery", 30));
biblio.listarLivros();
