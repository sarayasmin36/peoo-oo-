class Livro {
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
const livro1 = new Livro("Poemas", "Emily Dickinson", 50.30);

console.log(livro1.descricao());
console.log("------------");

// let livros : Livro[] = [livro1, livro2, livro3];
// livros.forEach(livro => {
//    console.log(livro.descricao());
//    console.log("------------");


livro1.setPreço(-1.99);

console.log(livro1.descricao());
console.log("------------");

livro1.setPreço(31.54);
console.log(livro1.descricao());