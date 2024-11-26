var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.descricao = function () {
        return "Titulo: ".concat(this.titulo, ",\n Autor: ").concat(this.autor, ",\n Pre\u00E7o: ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var livro2 = new Livro("Poemas", "Emily Dickinson", 50.30);
// let livros : Livro[] = [livro1, livro2, livro3];
// livros.forEach(livro => {
//    console.log(livro.descricao());
//    console.log("------------");
console.log(livro2.descricao());
