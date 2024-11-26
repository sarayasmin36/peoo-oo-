"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
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
        return "Titulo: ".concat(this.titulo, ",\n Autor: ").concat(this.autor, ",\n Pre\u00E7o: ").concat(this.preco.toFixed(2), ", Formato: ").concat(this.formato);
    };
    return Livro;
}());
exports.Livro = Livro;
