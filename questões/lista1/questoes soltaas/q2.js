var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Object.defineProperty(Livro.prototype, "pre\u00E7o", {
        get: function () {
            return this.preco;
        },
        set: function (preco) {
            if (preco >= 0)
                this.preco = preco;
            else
                console.log('Livro gratuito? Não existe.');
        },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.descricao = function () {
        return "Titulo: ".concat(this.titulo, ",\n Autor: ").concat(this.autor, ",\n Pre\u00E7o: ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var livro1 = new Livro("Poemas", "Emily Dickinson", 50.30);
console.log(livro1.descricao());
console.log("------------");
// let livros : Livro[] = [livro1, livro2, livro3];
// livros.forEach(livro => {
//    console.log(livro.descricao());
//    console.log("------------");
livro1.preço(-1.99);
console.log(livro1.descricao());
console.log("------------");
livro1.preço(31.54);
console.log(livro1.descricao());
