"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompras = void 0;
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
        console.log("Produto adicionado.");
    };
    CarrinhoDeCompras.prototype.calcularTotal = function () {
        return this.produtos.reduce(function (total, produto) { return total + produto.preco; }, 0);
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
