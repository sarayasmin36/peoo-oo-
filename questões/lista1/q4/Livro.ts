export class Livro {
    private titulo: string
    private autor: string
    private preco: number

    constructor(titulo: string, autor: string, preco: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.preco = preco;
}

    getPreço() : number {
        return this.preco;
    }

    setPreço(preco: number) : void {
        if (preco >= 0)
            this.preco = preco 
        else
            console.log('Livro gratuito? Não existe.');
    }

    descricao() : string {
        return `Titulo: ${this.titulo},\n Autor: ${this.autor},\n Preço: ${this.preco.toFixed(2)}`;
        }
}