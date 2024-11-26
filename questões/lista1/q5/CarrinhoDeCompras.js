"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompras = void 0;
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log("Produto adicionado.");
    }
    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
}
exports.CarrinhoDeCompras = CarrinhoDeCompras;
