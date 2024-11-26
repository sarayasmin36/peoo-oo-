var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    return Livro;
}());
var LivroDigital = /** @class */ (function (_super) {
    __extends(LivroDigital, _super);
    function LivroDigital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo) || this;
        _this = _super.call(this, autor) || this;
        _this = _super.call(this, preco) || this;
        _this.formato = formato;
        return _this;
    }
    LivroDigital.prototype.descricao = function () {
        return "Titulo: ".concat(this.titulo, ",\n Autor: ").concat(this.autor, ",\n Pre\u00E7o: ").concat(this.preco.toFixed(2), ", Formato: ").concat(this.formato);
    };
    return LivroDigital;
}(Livro));
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
