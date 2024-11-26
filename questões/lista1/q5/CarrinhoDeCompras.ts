import { Produto } from './Produtos';

export class CarrinhoDeCompras {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto) : void {
            this.produtos.push(produto);
                console.log("Produto adicionado.");
            }
    calcularTotal() : number {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
}